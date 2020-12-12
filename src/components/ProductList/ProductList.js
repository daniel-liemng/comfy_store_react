import React from "react";

import { GridView, ListView } from "../../components";
import { useFilterContext } from "../../context/filterContext";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();

  console.log("p", products);

  return <GridView products={products}>ProductList</GridView>;
};

export default ProductList;
