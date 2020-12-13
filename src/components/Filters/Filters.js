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

          {/* Start - Companies */}
          <div className='form-control'>
            <h5>Company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((com, index) => (
                <option key={index} value={com}>
                  {com}
                </option>
              ))}
            </select>
          </div>
          {/* End - Companies */}

          {/* Start - Colors */}
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {colors.map((co, index) => {
                if (co === "all") {
                  return (
                    <button
                      key={index}
                      name='color'
                      data-color='all'
                      onClick={updateFilters}
                      className={color === "all" ? "active all-btn" : "all-btn"}
                    >
                      All
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name='color'
                    data-color={co}
                    style={{ background: co }}
                    onClick={updateFilters}
                    className={co === color ? "active color-btn" : "color-btn"}
                  >
                    {co === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End - Colors */}

          {/* Start - Price */}
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* End - Price */}

          {/* Start - Shipping */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>Free Shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* End - Shipping */}
        </form>
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
