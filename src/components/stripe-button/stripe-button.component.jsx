import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) =>{

    const priceForStripe = price * 100;
    const publishable_key = 'pk_test_SUF6qxTfYqf6Gq3GG94YJqaX00VOV9aEQ7';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
          label='Pay Now'
          name='Crown Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/Cuz.svg'
          description={`Your total is : $$ ${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishable_key}
        />
    )
}

export default StripeCheckoutButton;