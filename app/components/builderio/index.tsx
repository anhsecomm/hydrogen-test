import {Builder} from '@builder.io/react';

import NewsletterInput from './NewsletterInput';
import {CountrySelector} from './CountrySelector';
import VacanciesComponent from './VacanciesComponent';

export const registerBuilderComponent = () => {
  Builder.registerComponent(NewsletterInput, {
    name: 'NewsLetter Input',
    inputs: [{name: 'textEmail', type: 'email'}],
  });

  Builder.registerComponent(CountrySelector, {
    name: 'Country Selector',
  });

  Builder.registerComponent(VacanciesComponent, {
    name: 'Vacancies Component',
  });
};
