import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/app/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./bll/store";

import { initializeApp } from 'firebase/app';





const firebaseConfig = {
    apiKey: "AIzaSyC88x9tvcoyb5IizAqFU_0DLknS9tZncHI",
    authDomain: "shop-test-4f18b.firebaseapp.com",
    databaseURL: "https://shop-test-4f18b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-test-4f18b",
    storageBucket: "shop-test-4f18b.appspot.com",
    messagingSenderId: "448526955353",
    appId: "1:448526955353:web:b2bb069b30d0b102f1d248"
}

const app = initializeApp(firebaseConfig)

export const Context =  createContext<any>({})



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <Context.Provider value={{firebase, app}} >
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Context.Provider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
