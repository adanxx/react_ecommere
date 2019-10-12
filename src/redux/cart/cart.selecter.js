import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=> cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
     cartItems =>  cartItems.reduce((accumaltedValue, cartItem) =>
    accumaltedValue + cartItem.quantity
 , 0)
)

export const selectCartItemTotal = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumaltedValue, cartItem) =>
    accumaltedValue + cartItem.price * cartItem.quantity
 , 0)
)