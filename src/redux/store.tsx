import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import logger from "./middleware/logger";
// import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter : counterReducer,
    },

    // middleware
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    // custom middleware 
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


//  type definition
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;