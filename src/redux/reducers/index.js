import { combineReducers } from 'redux'
import  { productReducer, selectedProductReducer } from '../reducers/productReducer'

export const RootReducer = combineReducers({

    allProducts: productReducer,
    product: selectedProductReducer
});

export default RootReducer