import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {connect} from 'react-redux'
import {toggleCartDropDown } from '../../redux/cart/cart.actions';

const CartIcon =({toggleCartDropDown, itemCount}) => {
    return (<div className='cart-icon' onClick={toggleCartDropDown}>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>{itemCount}</span>
    </div>)
}

const mapStateToProps = ({cart:{cartItems}})=>{
  return{
    itemCount : cartItems.reduce((accumaltedValue, cartItem) =>
       accumaltedValue + cartItem.quantity
    , 0)
  }
}

const mapDispacthToProps = dispatch =>({
    toggleCartDropDown: ()=>dispatch(toggleCartDropDown())
});

export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);