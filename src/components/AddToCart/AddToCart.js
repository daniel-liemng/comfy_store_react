import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import AddToCartWrapper from "./AddToCartWrapper";
import AmountButton from "../AmountButton/AmountButton";
import { useCartContext } from "../../context/cartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
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

      <div className='btn-container'>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, product, mainColor, amount)}
        >
          Add to cart
        </Link>
      </div>
    </AddToCartWrapper>
  );
};

export default AddToCart;
