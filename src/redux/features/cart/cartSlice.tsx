import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface ICart {
    products : IProduct[];
}

const initialState: ICart = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action : PayloadAction<IProduct>)=> {

            //! product age theke exist kore ki na seta check korar jonno 

            const existing = state.products.find(
                (product) => product._id === action.payload._id
            );

            if(existing){
                existing.quantity = existing.quantity! + 1;
            }else{
                
                state.products.push({...action.payload, quantity: 1});
            }
        },

        removeOneFromCart: (state, action: PayloadAction<IProduct>)=>{
            const existing = state.products.find(
                (product) => product._id === action.payload._id
            );

            if(existing && existing.quantity! > 1){
                existing.quantity = existing.quantity! - 1;
            }else{
                state.products = state.products.filter(
                    (product) => product._id !== action.payload._id
                )
            }
        },

        removeFromCart: (state, action: PayloadAction<IProduct>)=>{
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id
            )
        },
    },
});

export const {addToCart, removeFromCart, removeOneFromCart}= cartSlice.actions

export default cartSlice.reducer;