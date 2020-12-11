import React, { useEffect, createContext, useContext, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/productsReducer.js";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";
import { products_url as url } from "../utils/constants";

const ProductsContext = createContext();

const initialState = {
  // sidebar
  isSidebarOpen: false,
  // products
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    // loading
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const { data: products } = await axios.get(url);

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Global UseContext
const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
