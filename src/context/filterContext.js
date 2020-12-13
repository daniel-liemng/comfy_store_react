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
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // For load all products - initial rendering
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // For SORT
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  //// FILTER
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // Get text value of Button -> textContent
    if (name === "category") {
      value = e.target.textContent;
    }

    // Get color value of Button -> data-color & dataset.color
    if (name === "color") {
      value = e.target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }

    console.log("v", value);

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Global UseContext
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
