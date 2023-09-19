import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import { api } from './api/apiSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        [api.reducerPath] : api.reducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
