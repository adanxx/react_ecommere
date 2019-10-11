import {cartActionTypes} from './cart.types';

export const toggleCartDropDown = ()=>({
    type: cartActionTypes.TOGGLE_CART_STATUS
});

export const addItemCart = item =>({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})