import React from "react";
import Header from "./containers/Header";
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Productlisting from "./containers/Productlisting";
import Productdetail from "./containers/Productdetail";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
    return(
        <>
        <Header/>
        <Router>
        <Switch>
        <Route path="/" exact component={Productlisting}/>
        <Route path="/product/:productId" exact component={Productdetail}/>
        </Switch>


        </Router>
        
        </>

    )
}
export default App;