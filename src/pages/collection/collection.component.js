import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectedCollectionItem} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection})=>{
    debugger
    console.log(collection)

    return(
        <div className='collection-page'>
          <h2>Category-Page</h2>
       </div>
    )
    
};

const mapStateToProps = (state, ownProps)=>({
    collection: selectedCollectionItem(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);