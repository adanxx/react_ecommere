import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selecter';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

  const CartDropDown = ({cartItems, history}) =>{
    return(
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {
              cartItems.length ? cartItems.map( item => <CartItem key={item.id} item={item} />) :
              <span className='empty-message'>Your cart is Empty</span>
            }
          </div>
          <CustomButton onClick={()=> history.push('/checkout')}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropDown));