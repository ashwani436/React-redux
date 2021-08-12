import React,{useEffect} from 'react'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions';

function Productlisting(){
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
       
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    }
    
    
useEffect(()=>{
    fetchProducts();
},[]);

 console.log(products);
    return(
        <div className="ui grid container mt-5">
        <div className="my-5">
        <h1 className="text-center">Our Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12">
            <div className="row gy-4">
            <ProductComponent/>
            </div>
            </div>
            </div>
            </div>
            
           
            
            
        </div>
    )
}

export default Productlisting;
