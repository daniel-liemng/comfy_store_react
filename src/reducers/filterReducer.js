import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // For Filters - MaxPrice and Price
      let maxPrice = [...action.payload].map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        // filters
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const sortType = state.sort;
      let tempProducts = [...state.filtered_products];
      if (sortType === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sortType === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sortType === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          // const nameA = a.name.toUpperCase();
          // const nameB = b.name.toUpperCase();

          // if (nameA < nameB) {
          //   return -1;
          // }

          // return nameA < nameB ? -1 : null;
          // return nameA < nameB ? -1 : 0;

          return a.name.localeCompare(b.name);
        });
      }
      if (sortType === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          // const nameA = a.name.toUpperCase();
          // const nameB = b.name.toUpperCase();

          // if (nameA > nameB) {
          //   return -1;
          // }

          // return nameA > nameB ? -1 : null;
          // return nameA > nameB ? -1 : 0;

          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      return { ...state };
    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default filterReducer;
