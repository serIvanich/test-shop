import {ShoppingCartStateType} from "../../bll/shopping-cart-reducer/shopping-cart-reduser";


export const loadSettingsValue = () => {

    try {
        const serializedState = localStorage.getItem('productsInBasket');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveSettingsValue = (products: Array<ShoppingCartStateType> ) => {
    try {
        const serializedState = JSON.stringify(products);
        localStorage.setItem('productsInBasket', serializedState);
    } catch {
        // ignore write errors
    }
};
