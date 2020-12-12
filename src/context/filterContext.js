import React, { useEffect, createContext, useContext, useReducer } from "react";

import reducer from "../reducers/filterReducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./productsContext";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

// Global UseContext
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
