import LocalizedStrings from 'react-localization';

import ZH from './ZH';
import EN from './EN';
import VI from './VI';

// ! note: first param in object that LocalizedStrings received will be set as default language
// ! to see more you can import and console.log localizationStrings object at your component to see all the keys that support specific pages.
// ! to use in your component, pls follow 2 steps below:
// ! 1. const [root] = useMatches();
// ! 2. <h1>{root.data?.localizationStrings?.homepage?.hi}</h1>

export const localizationStrings = new LocalizedStrings<{[Key: string]: any}>({
  EN,
  VI,
  ZH,
});
