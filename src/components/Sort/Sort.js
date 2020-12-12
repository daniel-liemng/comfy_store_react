import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterContext } from "../../context/filterContext";
import SortWrapper from "./SortWrapper";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <SortWrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={grid_view ? "active" : null}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={!grid_view ? "active" : null}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <p>{products.length} products found</p>

      <hr />

      <form>
        <label htmlFor='sort'>sort by </label>
        <select
          value={sort}
          onChange={updateSort}
          name='sort'
          id='sort'
          className='sort-input'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </SortWrapper>
  );
};

export default Sort;
