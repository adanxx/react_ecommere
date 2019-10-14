export const addItemCart = (cartItem, cartItemToAdd)=>{
    const existingItem = cartItem.find( cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem) return  cartItem.map( item => existingItem ? {...item, quantity: item.quantity +1} : item )

    return [...cartItem, {...cartItemToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, cartItemRemove) =>{

    debugger
   const existingItem = cartItems.find( cartItem => cartItem.id === cartItemRemove.id);

   if(existingItem.quantity === 1){
      return cartItems.filter(item => item.id !== cartItemRemove.id);
   }

   return cartItems.map( item => 
       item.id === cartItemRemove.id ? {...item, quantity: item.quantity -1} : item
   );
}