// ! imports below for a specific page with specific cases
import {default as homepage} from './home';
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
  hi: 'xin chào',
  productName: 'tên sản phẩm',
  loading: 'Đang tải...',
  homepage,
  auth,
  account,
  order,
  footer,
  header,
  filter,
  orderDetails,
  // system error message
  system_error: 'Đã xảy ra sự cố. Vui lòng thử lại sau',
  storeList,
  product,
  notFound,
  code,
  cart,
  common,
  metaFields,
  blog,
  investorRelations,
  vacancies,
};
