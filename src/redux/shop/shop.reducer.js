import Shopdata from './shopping.data'

const INITIAL_STATE = {
    collections:Shopdata
}

const shopReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        default: 
         return state;
    }
}

export default shopReducer;