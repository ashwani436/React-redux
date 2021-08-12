import React from 'react'
import { useSelector } from 'react-redux'
import '../containers/productcomponnet.css';
import {Link} from "react-router-dom";


function ProductComponent() {
    const products=useSelector((state)=>state.allProducts.products);
   
  const renderlist=products.map((product)=>{
    const{id,title,price,category,image}=product;
      return(
        <div className="col-lg-3 col-md-6 col-sm-12">
            <Link to={`/product/${id}`}>
        <div className="card text-center card card-body h-300">
            <div className="image"key={id}>
              <img src={image} className="card-img-top" alt={title}/>
              </div>
              <div className="card-body text-black-50">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
        </div>
        </Link>
        </div>
      
    

      );
  });
    return (
   <>
   {renderlist}
   </>
    )
}

export default ProductComponent;
