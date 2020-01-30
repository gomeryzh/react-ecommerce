import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_nwM8vv48Bhaqxjt0JBsqPrVO00kJM9G1Oo';

  const onToken = token => {
    console.log(token);
    alert('Paymeny successful')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothes Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
