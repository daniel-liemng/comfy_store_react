import React, { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer.js";
import {} from "../actions";

const initialState = {};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: "Users" }}>
      {children}
    </UserContext.Provider>
  );
};

// Global UseContext
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
