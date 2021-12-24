
import {combineReducers} from 'redux';
import { shoppingCartReducer } from './shopping-cart-reducer/shopping-cart-reduser';
import {productsReducer} from './products-reducer/products-reducer'


export const rootReducer = combineReducers({
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
})