import clsx from 'clsx';
import React, {useEffect, useState} from 'react';

import {apiKey} from '~/builder/builder_env';

export default function Logo({
  logoType = 'default',
}: {
  logoType?: 'default' | 'white';
}) {
  const [logoWhite, setLogoWhite] = useState('/assets/logo/logo-vinamilk.svg');
  const [altWhite, setAltWhite] = useState('Logo Vinamilk');
  const [logoPrimary, setLogoPrimary] = useState(
    '/assets/logo/logo-vinamilk.svg',
  );
  const [altPrimary, setAltPrimary] = useState('Logo Vinamilk');
  useEffect(() => {
    const fetchData = async () => {
      const resLogoWhite: any = await fetch(
        `https://cdn.builder.io/api/v2/content/logo?apiKey=${apiKey}&query.id=2cd428ff87444b9796eb8c5d1b49ac80&limit=1&includeRefs=true`,
      ).then((response) => response.json());
      const res: any = await fetch(
        `https://cdn.builder.io/api/v2/content/logo?apiKey=${apiKey}&query.id=a37aaa036a3c4bbb9addeeee43f80a3f&limit=1&includeRefs=true`,
      ).then((response) => response.json());

      setLogoWhite(resLogoWhite.results[0].data.logo);
      setAltWhite(resLogoWhite.results[0].data.atlTitle);
      setLogoPrimary(res.results[0].data.logo);
      setAltPrimary(res.results[0].data.atlTitle);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <img
        className={clsx('w-[106px] lg-max:w-[78px]', {
          hidden: logoType !== 'white',
        })}
        src={logoWhite}
        alt={altWhite}
      />
      <img
        className={clsx('w-[106px] lg-max:w-[78px]', {
          hidden: logoType === 'white',
        })}
        src={logoPrimary}
        alt={altPrimary}
      />
    </React.Fragment>
  );
}
