import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import {getDatabase, onValue, ref} from "firebase/database";
import {Context} from "../index";

function App() {

    const {app} = useContext(Context)
    useEffect(() => {
        debugger

        const db = getDatabase();
        const starCountRef = ref(db, 'products');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            // updateStarCount(postElement, data);
        });

    }, [])


    return (
        <div className="App">
            <Header/>
            <ProductsPage/>

        </div>
    );
}

export default App;
