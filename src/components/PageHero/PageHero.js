import React from "react";
import { Link } from "react-router-dom";

import PageHeroWrapper from "./PageHeroWrapper";

const PageHero = ({ title, product }) => {
  return (
    <PageHeroWrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </PageHeroWrapper>
  );
};

export default PageHero;
