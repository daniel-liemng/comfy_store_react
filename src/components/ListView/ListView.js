import React from "react";
import { Link } from "react-router-dom";

import ListViewWrapper from "./ListViewWrapper";
import { formatPrice } from "../../utils/helpers";

const ListView = ({ products }) => {
  return (
    <ListViewWrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </ListViewWrapper>
  );
};

export default ListView;
