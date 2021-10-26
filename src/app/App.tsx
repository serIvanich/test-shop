import React, {useContext, useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import { getDatabase, ref, onValue } from 'firebase/database';
import {Context} from "../index";



function App() {
    const {app} = useContext(Context)
    useEffect(() => {

       const db = getDatabase()
        const reference = ref(db, 'prod1/');

        console.log(reference)
    }, [])


  return (
    <div className="App">
      <Header />
      <ProductsPage />
      
    </div>
  );
}

export default App;
