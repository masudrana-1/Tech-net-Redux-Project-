import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";


interface IProducts {
    status: boolean;
    priceRange: number;
}

const initialState: IProducts = {
    status: false,
    priceRange: 250,
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
});

export default productSlice.reducer;