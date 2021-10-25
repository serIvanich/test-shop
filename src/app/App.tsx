import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import firebase from 'firebase/compat/app'



function App() {
    useEffect(() => {
       const db = firebase.database
        console.log(db)
    }, [])
  return (
    <div className="App">
      <Header />
      <ProductsPage />
      
    </div>
  );
}

export default App;
