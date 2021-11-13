import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/products/ProductsPage";
import {Context} from "../index";
import {Route, Switch} from "react-router-dom";
import {ShoppingCart} from "../features/shoppingCart/ShoppingCart";
import {Main} from '../features/main/Main';
import {actionProducts, ProductType} from "../features/products/products-reduser";
import {getDatabase, onValue, ref} from "firebase/database";
import {useActions} from "../utils/redux-utils";


function App() {

    const {app} = useContext(Context)

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Route path={'/products'} render={() => <ProductsPage/>}/>
                <Route path={'/cart'} render={() => <ShoppingCart/>}/>
            </Switch>

        </div>
    );
}

export default App;
