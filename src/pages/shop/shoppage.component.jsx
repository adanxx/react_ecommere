import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOveriew from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';




const ShopPage = ({ match}) =>{

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component= {CollectionOveriew}/>
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  )

};


export default ShopPage;