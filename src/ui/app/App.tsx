import React, {useEffect} from 'react';
import './App.css';
import {ProductsPage} from "../features/products/ProductsPage";
import {Route, Routes} from "react-router-dom";
import {ShoppingCart} from "../features/shoppingCart/ShoppingCart";
import {Main} from '../features/main/Main';
import HeaderM from '../features/header/HeaderM';
import {loadSettingsValue} from "../../utility/localStorage/localStorage";
import {useActions} from "../../utils/redux-utils";
import {actionShoppingCart} from "../../bll/shopping-cart-reducer/shopping-cart-reduser";


function App() {
    const {addProductToCart} = useActions(actionShoppingCart)

    useEffect(() => {

        const localProductsInBasket = loadSettingsValue()
        if (localProductsInBasket) {
            addProductToCart(localProductsInBasket)
        }
    },[])

    return (
        <div className="App">
            <HeaderM/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/'}  element={<Main/>}/>
                    <Route path={'/products'}  element={<ProductsPage/>}/>
                    <Route path={'/cart'}  element={<ShoppingCart/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
