import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import {getDatabase, onValue, ref, set} from "firebase/database";
import {Context} from "../index";


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
            <ProductsPage/>

        </div>
    );
}

export default App;
