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
                console.log('test')
            }else{
                
                state.products.push(action.payload);
            }

        },
    },
});

export const {addToCart}= cartSlice.actions

export default cartSlice.reducer;