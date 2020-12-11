import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductWrapper from "./ProductWrapper";
import { formatPrice } from "../../utils/helpers";

const Product = ({ id, name, image, price }) => {
  return (
    <ProductWrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>

      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </ProductWrapper>
  );
};

export default Product;
