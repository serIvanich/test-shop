import React from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {ProductsPage} from "../features/product/ProductsPage";


function App() {
  return (
    <div className="App">
      <Header />
      <ProductsPage />
      
    </div>
  );
}

export default App;
