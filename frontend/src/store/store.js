import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "./productSlice";


const store = configureStore({
    reducer: {
        products: productSliceReducer,
    }
})

export default store; 