
import {cartActionTypes} from './cart.types';
import {addItemCart, removeItem} from './cart.util'

const INITAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state= INITAL_STATE, action) =>{

    switch(action.type){

       case cartActionTypes.TOGGLE_CART_STATUS:
        return{
            ...state,
            hidden: !state.hidden
        }

        case cartActionTypes.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemCart(state.cartItems, action.payload)
        }

        case cartActionTypes.CLEAR_ITEM_FROM_CART:
          return{
            ...state,
            cartItems: state.cartItems.filter( item => item.id !== action.payload.id)
        }

        case cartActionTypes.REMOVE_ITEM:
            return{
              ...state,
              cartItems: removeItem(state.cartItems, action.payload)
        }

        default: 
         return state;
    }
}

export default cartReducer;