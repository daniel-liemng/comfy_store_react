import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const productsReducer = (state, action) => {
  switch (action.type) {
    // sidebar
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    // products
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      const featuredProducts = action.payload.filter((p) => p.featured);
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products: featuredProducts,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };
    default:
      return state;
  }
};

export default productsReducer;
