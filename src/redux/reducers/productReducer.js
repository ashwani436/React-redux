import { ActionTypes } from "../constants/action-types"

const initialState={
    products:[],
};
export const productReducer=(state=initialState,{type,payload})=>{
   switch(type){
       case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;
   }
};
export const selectedproductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
             return {...state,...payload};

             default:
                 return state;
    }
 };
 export const removeselectedProductReducer=(state={},{type})=>{
    switch(type){
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
             return {};
             
             default:
                 return state;
    }
 };
 export const addToCartReducer=(state=[],{type,payload})=>{
    switch(type){
        case ActionTypes.ADD_TO_CART:
             return {...state,...payload};
             
             default:
                 return state;
    }
 };