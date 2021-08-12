import {combineReducers} from 'redux';
import { addToCartReducer, productReducer, selectedproductReducer } from './productReducer';


const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedproductReducer,
    cart:addToCartReducer,
});
 

export default reducers;