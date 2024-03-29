import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectedCollectionItem} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection})=>{
   
    const {title, items} = collection;
  
  
    return(
        <div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
           {
               items.map(item => <CollectionItem key={item.id} item={item}  />)
           }
          </div>
       </div>
    )
    
};

const mapStateToProps = (state, ownProps)=>({
    collection: selectedCollectionItem(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);