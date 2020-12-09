import React, { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer.js";
import {} from "../actions";

const initialState = {};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value={{ filter: "Filters" }}>
      {children}
    </FilterContext.Provider>
  );
};

// Global UseContext
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
