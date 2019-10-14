import {createSelector} from 'reselect';

const selectShop =  state => state.shop;

const COLLECTION_MAP_ID = { 
  hats:1,
  sneakers: 2,
  jackets: 3,
  womans: 4,
  mens: 5
}


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectedCollectionItem = urlparam =>{
    createSelector(
        [selectShopCollection],
        collections => collections.find(collection => collection.id === COLLECTION_MAP_ID[urlparam])
    )
};