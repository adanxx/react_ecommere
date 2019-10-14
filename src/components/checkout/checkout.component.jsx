import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItem, selectCartItemTotal} from '../../redux/cart/cart.selecter';
import CheckoutItem from '../checkout_Item/checoutItem.component'

const CheckoutPage = ({cartItems, cartTotal}) =>{
 return (
   <div className="checkout-page">
     <div className="checkout-header">

       <div className="header-block">
         <span>Product</span>
       </div>
       <div className="header-block">
         <span>Description</span>
       </div>
       <div className="header-block">
         <span>Quantity</span>
       </div>
       <div className="header-block">
         <span>Price</span>
       </div>
       <div className='header-block'>
         <span>Remove</span>
       </div>
     </div>
     {
         cartItems.map( item =>
            (<CheckoutItem key={item.id} cartItem={item} />)
         )
     }
     <div className='total'><span> Total: ${cartTotal}</span></div>
   </div>
 );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    cartTotal: selectCartItemTotal
})

export default connect(mapStateToProps)(CheckoutPage);

