import {createActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const {
  productsGet,
  productsGetSuccess,
  productsPost,
  productsPostSuccess,
  productsPut,
  productsPutSuccess,
  productsDelete,
  productsDeleteSuccess
} = createActions({
  [ActionTypes.PRODUCTS_GET]: (payload) => payload,
  [ActionTypes.PRODUCTS_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.PRODUCTS_POST]: (payload) => payload,
  [ActionTypes.PRODUCTS_POST_SUCCESS]: (payload) => payload,
  [ActionTypes.PRODUCTS_PUT]: (payload) => payload,
  [ActionTypes.PRODUCTS_PUT_SUCCESS]: (payload) => payload,
  [ActionTypes.PRODUCTS_DELETE]: ({id}) => id,
  [ActionTypes.PRODUCTS_DELETE_SUCCESS]: (payload) => payload,
});