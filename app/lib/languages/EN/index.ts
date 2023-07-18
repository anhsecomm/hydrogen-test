import {default as auth} from './auth';
import {default as account} from './account';
import {default as order} from './order';
import {default as footer} from './footer';
import {default as header} from './header';
import {default as filter} from './filter';
import {default as code} from './code';
import orderDetails from './orderDetails';
import storeList from './storeList';
import {default as notFound} from './notFound';
import product from './product';
import cart from './cart';
import common from './common';
import metaFields from './metaFields';
import blog from './blog';
import investorRelations from './investorRelations';
import vacancies from './vacancies';

export default {
  hi: 'hello',
  productName: 'product name',
  loading: 'Loading...',
  auth,
  account,
  order,
  orderDetails,
  footer,
  header,
  filter,
  // system error message
  system_error: 'Something went wrong. Please try again later',
  storeList,
  product,
  code,
  notFound,
  cart,
  common,
  metaFields,
  blog,
  investorRelations,
  vacancies,
};
