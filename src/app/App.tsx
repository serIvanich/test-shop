import React, {useContext} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/products/ProductsPage";
import {Context} from "../index";
import {Route, Switch} from "react-router-dom";
import {ShoppingCart} from "../features/shoppingCart/ShoppingCart";
import {Main} from '../features/main/Main';
import HeaderM from '../features/header/HeaderM';


function App() {

    const {app} = useContext(Context)

    return (
        <div className="App">
            <HeaderM/>
            <div className={'content'}>
                <Switch>
                    <Route exact path={'/'} render={() => <Main/>}/>
                    <Route path={'/products'} render={() => <ProductsPage/>}/>
                    <Route path={'/cart'} render={() => <ShoppingCart/>}/>
                </Switch>
            </div>


        </div>
    );
}

export default App;
