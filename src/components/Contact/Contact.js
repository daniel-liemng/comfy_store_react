import React from "react";

import ContactWrapper from "./ContactWrapper";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='button' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
