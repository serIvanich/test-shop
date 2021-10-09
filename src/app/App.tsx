import React from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductPage} from "../features/product/ProductPage";
import {Basket} from "../features/basket/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
      <Basket />
    </div>
  );
}

export default App;
