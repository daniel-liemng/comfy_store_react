import React from "react";
import { Link } from "react-router-dom";

import ErrorPageWrapper from "./ErrorPageWrapper";

const ErrorPage = () => {
  return (
    <ErrorPageWrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
