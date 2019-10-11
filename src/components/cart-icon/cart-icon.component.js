import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {connect} from 'react-redux'
import {toggleCartDropDown } from '../../redux/cart/cart.actions';

const CartIcon =({toggleCartDropDown}) => {
    return (<div className='cart-icon' onClick={toggleCartDropDown}>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>0</span>
    </div>)
}

const mapDispacthToProps = dispatch =>({
    toggleCartDropDown: ()=>dispatch(toggleCartDropDown())
})

export default connect(null, mapDispacthToProps)(CartIcon);