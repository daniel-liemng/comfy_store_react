import React from "react";
import Product from "../Product/Product";

import GridViewWrapper from "./GridViewWrapper";

const GridView = ({ products }) => {
  return (
    <GridViewWrapper>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </GridViewWrapper>
  );
};

export default GridView;
