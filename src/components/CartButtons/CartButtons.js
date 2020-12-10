import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

import CartButtonsWrapper from "./CartButtonsWrapper";
import { useUserContext } from "../../context/userContext";
import { useProductsContext } from "../../context/productsContext";
import { useCartContext } from "../../context/cartContext";

const CartButtons = () => {
  return (
    <CartButtonsWrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>

      <button type='button' className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </CartButtonsWrapper>
  );
};

export default CartButtons;
