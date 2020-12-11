import React from "react";
import { Link } from "react-router-dom";

import FeaturedProductsWrapper from "./FeaturedProductsWrapper";
import { useProductsContext } from "../../context/productsContext";
import { Loading, Error, Product } from "../../components";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featuredProducts,
  } = useProductsContext();

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <FeaturedProductsWrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>

      <div className='section-center featured'>
        {featuredProducts.slice(0, 3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </FeaturedProductsWrapper>
  );
};

export default FeaturedProducts;
