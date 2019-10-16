import {createSelector} from 'reselect';

const selectShop =  state => state.shop;


export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionPreview = createSelector(
  [selectShopCollection],
  collections =>Object.keys(collections).map(key => collections[key])
)

export const selectedCollectionItem = urlparam =>{
   return  createSelector(
      [selectShopCollection],
      collections => collections[urlparam]
    )
};