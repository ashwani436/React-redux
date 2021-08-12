import React from 'react'
import {addToCart}  from "../redux/actions/productActions";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch} from "react-redux";

function Header(){
    
    const cartdispatch = useDispatch();
    const cart=0;
    cartdispatch(addToCart(cart));
    
    return (
        <div className="ui menu">
            <div className="ui container center">
                <h2>FakeShop</h2>
               

            </div>
            <div className="float-right" style={{marginRight:"20px"}}>
                 <ShoppingCartIcon>{cart}</ShoppingCartIcon>
                </div>
        </div>
    )
}

export default Header
