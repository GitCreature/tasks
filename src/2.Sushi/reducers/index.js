import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';
import products from "../api/products";

// defaultState не используется, если в createStore передается preloadedState.
const defaultState = {
  page: Page.menu,
  products: {
    allIds: [],
    byId: {},
    status: Status.none
  },
  purchases: []
};
function loadProductsSuccess(state, action) {
    const productsAllIds = products.map(p => p.id);
    const productsById = products.reduce(
        (result, product) => ({ ...result, [product.id]: product }),
        {}
    );
    return {
        ...state,
        products: {
            status: Status.loaded
        }
    }
}
export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PAGE:
      return {
        ...state,
        page: action.page
      };
      case actionTypes.LOAD_PRODUCTS_REQUEST:
        return {
            ...state,
            products: {
              status: Status.loading
            }
        };
      case actionTypes.LOAD_PRODUCTS_SUCCESS:
          loadProductsSuccess(state,action)
  }
  return state;
}
