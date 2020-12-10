import React from "react";

import AboutPageWrapper from "./AboutPageWrapper";
import { PageHero } from "../../components";
import aboutImg from "../../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <AboutPageWrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quae enim et magni nihil cum nemo odio perferendis esse molestiae
            error similique dolor minus porro voluptatem exercitationem quos ex
            amet doloribus, voluptates quaerat itaque. Officiis voluptate quae
            voluptatibus sapiente, accusantium nobis asperiores? Sequi omnis
            natus rerum quisquam aliquid, dolor a.
          </p>
        </article>
      </AboutPageWrapper>
    </main>
  );
};

export default AboutPage;
