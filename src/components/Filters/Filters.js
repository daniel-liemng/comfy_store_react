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
    all_products,
  } = useFilterContext();

  // Unique values
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

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

          {/* Start - Categories */}
          <div className='form-control'>
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => (
                <button
                  key={index}
                  type='button'
                  className={category === cat.toLowerCase() ? "active" : null}
                  name='category'
                  onClick={updateFilters}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* End - Categories */}
        </form>
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
