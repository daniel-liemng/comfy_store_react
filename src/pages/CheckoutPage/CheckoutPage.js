import React from "react";

import CheckoutPageWrapper from "./CheckoutPageWrapper";
import { PageHero } from "../../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='Checkout' />
      <CheckoutPageWrapper className='page'>
        <h1>Checkout here</h1>
      </CheckoutPageWrapper>
    </main>
  );
};

export default CheckoutPage;
