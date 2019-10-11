export const addItemCart = (cartItem, cartItemToAdd)=>{
    const existingItem = cartItem.find( cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem) return  cartItem.map( item => existingItem ? {...item, quantity: item.quantity +1} : item )

    return [...cartItem, {...cartItemToAdd, quantity: 1 }]
}