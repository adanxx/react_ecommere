import {cartActionTypes} from './cart.types';

export const toggleCartDropDown = ()=>({
    type: cartActionTypes.TOGGLE_CART_STATUS
});

export const addItemCart = item =>({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item =>({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})