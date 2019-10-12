import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartDropDown } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selecter';
import { createStructuredSelector } from 'reselect';

const CartIcon =({toggleCartDropDown, itemCount}) => {
    return (<div className='cart-icon' onClick={toggleCartDropDown}>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>{itemCount}</span>
    </div>)
}

const mapStateToProps =  createStructuredSelector({
  itemCount : selectCartItemsCount
})

const mapDispacthToProps = dispatch =>({
    toggleCartDropDown: ()=>dispatch(toggleCartDropDown())
});

export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);