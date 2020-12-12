import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import AddToCartWrapper from "./AddToCartWrapper";
import AmountButton from "../AmountButton/AmountButton";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <AddToCartWrapper>
      <div className='colors'>
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`${
                mainColor === color ? "active color-btn" : "color-btn"
              }`}
              onClick={() => setMainColor(color)}
            >
              {colors[index] === mainColor ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'></div>
    </AddToCartWrapper>
  );
};

export default AddToCart;
