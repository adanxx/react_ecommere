import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

const CartDropDown = ({cartItems}) =>{
    return(
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {
              cartItems.map( item => <CartItem key={item.id} item={item} />)
            }
          </div>
          <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) =>({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown);