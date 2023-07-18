import {useMatches} from '@remix-run/react';
import {useCallback, useMemo} from 'react';

type UseTranslationReturnType = {
  language: Record<string, string>;
  t: (_key: string) => string;
};

const defaultReturn: UseTranslationReturnType = {
  language: {},
  t: (key) => key,
};

export function useTranslation(namespace = ''): UseTranslationReturnType {
  const [root] = useMatches();

  if (!root) return defaultReturn;

  // approach 1: lang.snake_case => translated or undefined
  const language = useMemo(
    () =>
      namespace
        ? root.data.localizationStrings[namespace]
        : root.data.localizationStrings,
    [namespace, root.data.localizationStrings],
  );

  // approach 2: t('Some text') => translated or Some text
  // better for translating messages from the server
  const t = useCallback((key: string) => language[key] || key, [language]);

  return {t, language};
}
