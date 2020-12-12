import React from "react";
import { FaCheck } from "react-icons/fa";

import { useFilterContext } from "../../context/filterContext";
import FiltersWrapper from "./FiltersWrapper";
import { formatPrice, getUniqueValues } from "../../utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products: products,
  } = useFilterContext();

  return (
    <FiltersWrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Start - Search input */}
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search...'
              className='search-input'
              name='text'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* End - Search input */}
        </form>
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
