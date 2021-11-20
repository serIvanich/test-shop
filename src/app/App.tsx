import React, {useContext} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/products/ProductsPage";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import {ShoppingCart} from "../features/shoppingCart/ShoppingCart";
import {Main} from '../features/main/Main';
import HeaderM from '../features/header/HeaderM';


function App() {

    const {app} = useContext(Context)

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
