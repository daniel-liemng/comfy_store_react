import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import AmountButtonWrapper from "./AmountButtonWrapper";

const AmountButton = ({ amount, increase, decrease }) => {
  return (
    <AmountButtonWrapper>
      <button onClick={decrease} type='button'>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button onClick={increase} type='button'>
        <FaPlus />
      </button>
    </AmountButtonWrapper>
  );
};

export default AmountButton;
