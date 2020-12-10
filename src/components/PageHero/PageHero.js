import React from "react";
import { Link } from "react-router-dom";

import PageHeroWrapper from "./PageHeroWrapper";

const PageHero = ({ title }) => {
  return (
    <PageHeroWrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>/ {title}
        </h3>
      </div>
    </PageHeroWrapper>
  );
};

export default PageHero;
