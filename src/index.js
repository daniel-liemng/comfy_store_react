import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/productsContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);
