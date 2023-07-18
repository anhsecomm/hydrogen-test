import {useFetcher, useLocation, useMatches} from '@remix-run/react';
import type {CartBuyerIdentityInput} from '@shopify/hydrogen/storefront-api-types';
import clsx from 'clsx';
import {useCallback, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';

import {Button} from '~/components';
import type {Locale, Localizations} from '~/lib/type';
import {CartAction} from '~/lib/type';
import {DEFAULT_LOCALE} from '~/lib/utils';

import dropdown from '../../assets/icons/dropdown.svg';

export function CountrySelector() {
  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = useRef<HTMLDetailsElement>(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const {pathname, search} = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    '',
  )}${search}`;

  const countries = (fetcher.data ?? {}) as Localizations;
  const defaultLocale = countries?.['default'];
  const defaultLocalePrefix = defaultLocale
    ? `${defaultLocale?.language}-${defaultLocale?.country}`
    : '';

  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const observerRef = useRef(null);
  useEffect(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);

  // Get available countries list when in view
  useEffect(() => {
    if (!inView || fetcher.data || fetcher.state === 'loading') return;
    fetcher.load('/api/countries');
  }, [inView, fetcher]);

  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);
  return (
    <section ref={observerRef} className="w-full" onMouseLeave={closeDropdown}>
      <div className="relative">
        <details
          className="w-[140px] h-[30px] border-[1px] border-[#E5E5E5] rounded-[6px] bg-white"
          ref={closeRef}
        >
          <div className="w-full overflow-auto max-h-36 rounded-[6px] absolute top-0 -translate-y-full">
            {countries &&
              Object.keys(countries).map((countryPath) => {
                const countryLocale = countries[countryPath];
                const isSelected =
                  countryLocale.language === selectedLocale.language &&
                  countryLocale.country === selectedLocale.country;

                const countryUrlPath = getCountryUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale,
                });

                return (
                  <Country
                    key={countryPath}
                    closeDropdown={closeDropdown}
                    countryUrlPath={countryUrlPath}
                    isSelected={isSelected}
                    countryLocale={countryLocale}
                    flag={countries[countryPath].flag}
                  />
                );
              })}
          </div>
          <summary className="flex items-center text-[12px] justify-evenly select-none w-full h-full cursor-pointer">
            <img
              width={16}
              src={selectedLocale.flag}
              alt={selectedLocale.label}
            />
            {selectedLocale.label}
            <img src={dropdown} alt="dropdown-icon" />
          </summary>
        </details>
      </div>
    </section>
  );
}

function Country({
  closeDropdown,
  countryLocale,
  countryUrlPath,
  flag,
}: {
  closeDropdown: () => void;
  countryLocale: Locale;
  countryUrlPath: string;
  isSelected: boolean;
  flag: any;
}) {
  return (
    <ChangeLocaleForm
      key={countryLocale.country}
      redirectTo={countryUrlPath}
      buyerIdentity={{
        countryCode: countryLocale.country,
      }}
    >
      <Button
        className={clsx([
          'text-[#404040] text-[12px]',
          'bg-white w-full transition flex justify-start gap-[5px]',
          'items-center text-left cursor-pointer py-2 px-2',
        ])}
        type="submit"
        variant="primary"
        onClick={closeDropdown}
      >
        <img width={16} src={flag} alt={countryLocale.label} />
        {countryLocale.label}
      </Button>
    </ChangeLocaleForm>
  );
}

function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo,
}: {
  children: React.ReactNode;
  buyerIdentity: CartBuyerIdentityInput;
  redirectTo: string;
}) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.UPDATE_BUYER_IDENTITY}
      />
      <input
        type="hidden"
        name="buyerIdentity"
        value={JSON.stringify(buyerIdentity)}
      />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      {children}
    </fetcher.Form>
  );
}

function getCountryUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale,
}: {
  countryLocale: Locale;
  pathWithoutLocale: string;
  defaultLocalePrefix: string;
}) {
  let countryPrefixPath = '';
  const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;

  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}
