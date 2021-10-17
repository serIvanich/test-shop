import React from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";
import {MyShoppingPage} from "../features/myShoppingPage/MyShoppingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsPage />
      <MyShoppingPage />
    </div>
  );
}

export default App;
