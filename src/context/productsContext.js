import React, { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducers/productsReducer.js";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // useEffect(() => {
  //   openSidebar();
  // }, []);

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
