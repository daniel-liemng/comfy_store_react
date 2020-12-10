import React from "react";

import ServicesWrapper from "./ServicesWrapper";
import { services } from "../../utils/constants";

const Services = () => {
  return (
    <ServicesWrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            perferendis libero eveniet corrupti illum deleniti vel laboriosam
            eligendi voluptatem at?
          </p>
        </article>

        <div className='services-center'>
          {services.map(({ id, icon, title, text }) => (
            <article className='service' key={id}>
              <span className='icon'>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
