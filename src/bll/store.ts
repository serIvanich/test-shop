import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from "./reducers";
import {saveSettingsValue} from "../utility/localStorage/localStorage";


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

store.subscribe(() => {

    saveSettingsValue([
        ...store.getState().shoppingCart.products
    ]);
});
// а это, чтобы можно было в консоли браузера обращаться к state в любой момент
// @ts-ignore
window.store = store;

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./reducers', () => {
//       store.replaceReducer(rootReducer)
//     })
// }

