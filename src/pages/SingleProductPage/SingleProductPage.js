import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import SingleProductPageWrapper from "./SingleProductPageWrapper";
import { useProductsContext } from "../../context/productsContext";
import { single_product_url as url } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../../components";

const SingleProductPage = () => {
  const history = useHistory();

  const { id } = useParams();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // After 3s of error page, push to Home
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  // console.log(product);
  const {
    id: sku,
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    company,
    images,
  } = product;

  return (
    <SingleProductPageWrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='products' className='btn'>
          back to products
        </Link>

        <div className='product-center'>
          <ProductImages />
          <section className='content'>
            <h2>{name}</h2>
            <Stars />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available: </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </SingleProductPageWrapper>
  );
};

export default SingleProductPage;
