import React from "react";

import { PageHero, Filters, ProductList, Sort } from "../../components";
import ProductsPageWrapper from "./ProductsPageWrapper";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <ProductsPageWrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </ProductsPageWrapper>
    </main>
  );
};

export default ProductsPage;
