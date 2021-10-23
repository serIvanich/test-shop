// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers} from 'redux';
import { shoppingCartReducer } from '../features/shoppingCart/shopping-cart-reduser';
import {productsReducer} from './../features/product/products-reduser'


export const rootReducer = combineReducers({
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
})