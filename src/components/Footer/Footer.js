import React from "react";

import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Comfy</span>
      </h5>
      <h5> All rights reserved</h5>
    </FooterWrapper>
  );
};

export default Footer;
