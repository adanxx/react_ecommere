import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';
import {selectShopCollection} from '../../redux/shop/shop.selector'

const CollectionsOveriew = ({collections})=>{
    return(
        <div className='collections-overview'>
              {
            collections.map(({id,...collectionProps} )=>(
                <CollectionPreview key={id} {...collectionProps} />
            ))
          }
        </div>
    ); 
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})
  
  

export default connect(mapStateToProps)(CollectionsOveriew);