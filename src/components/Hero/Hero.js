import React from "react";
import { Link } from "react-router-dom";

import HeroWrapper from "./HeroWrapper";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <HeroWrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          confort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi autem
          obcaecati explicabo accusamus ratione porro ea quasi at aspernatur ad.
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>

      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </HeroWrapper>
  );
};

export default Hero;
