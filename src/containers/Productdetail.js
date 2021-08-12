import React,{useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import {selectedProduct,removeselectedProduct} from "../redux/actions/productActions";
import "../containers/productdetails.css";


function Productdetail(){
    const product = useSelector(state => state.product);
    const{productId}=useParams();

    const dispatch = useDispatch();
  
     



    const{image,title,price,category,description}=product;
    console.log(product);
    const fetchProductDetails=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(selectedProduct(response.data));
        
       
    };
    useEffect(()=>{
    if(productId && productId!=="")
       fetchProductDetails();
       return()=>{
           dispatch(removeselectedProduct());
       }
    }, [productId]);
   
    

    

    return (
<div className="container" id="productdetails">
       <h3 className="mt-5">Product Details</h3>
        <div className="mb-3" id="card">
        <div className="row g-0">
            <div className="col-lg-4 col-md-4 col-sm-4">
            <img src={image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-8">
            <div className="card-body" id="description">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">$ {price}</p>
                <p className="card-text"><small className="text-muted">{category}</small></p>
                <p className="card-text">{description}</p>
                <i className="shop icon"></i>
                <button className="btn btn-success">Add to Cart</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Productdetail;
