import React from 'react';

import ShopDATA from './shopping.data'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'


class ShopPage extends React.Component{
 constructor(){
   super()

   this.state =  {
     collection : ShopDATA
   }
 }
 render(){
   const {collection} = this.state;
    return (
         <div className="shop-page">
          {
            collection.map(({id,...collectionProps} )=>(
                <CollectionPreview key={id} {...collectionProps} />
            ))
          }
         </div>
       )
   };
}



export default ShopPage;