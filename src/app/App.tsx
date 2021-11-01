import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import {getDatabase, onValue, ref, set} from "firebase/database";
import {Context} from "../index";
import {Route, Switch} from "react-router-dom";
import {ShoppingCart} from "../features/shoppingCart/ShoppingCart";
import { Main } from '../features/main/Main';


function App() {

    const {app} = useContext(Context)
    useEffect(() => {


        const db = getDatabase();
        const starCountRef = ref(db, 'products');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            // updateStarCount(postElement, data);
        });

    }, [])

    function writeProdData(imageUrl: any) {
        const db = getDatabase();
        set(ref(db, 'products/prod1'), {

            product_picture: imageUrl
        });

    }

    writeProdData('hello data')

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/'} render={() => <Main/>} />
                <Route path={'/product-page'} render={() => <ProductsPage/>} />
                <Route path={'/shopping-cart'} render={() => <ShoppingCart/>} />
            </Switch>

        </div>
    );
}

export default App;
