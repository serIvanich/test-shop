import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import {getDatabase} from 'firebase/database';
import {Context} from "../index";
import {  getApp } from "firebase/app"

function App() {

    const {app} = useContext(Context)
    useEffect(() => {
        debugger
        const db = getDatabase(app)


        console.log(getApp().name)


    }, [])


    return (
        <div className="App">
            <Header/>
            <ProductsPage/>

        </div>
    );
}

export default App;
