import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button//custom-button.component';

import {connect} from 'react-redux'
import {addItemCart} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItemCart})=>{

  const {name , price, imageUrl} = item;

   return(
  <div  className='collection-item'>
      <div 
         className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
         />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={()=> addItemCart(item)}>Add To Cart</CustomButton>
  </div>
   )
};

const mapDispatchToProps = dispatch =>({
  addItemCart: item => dispatch(addItemCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);