import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "./productSlice";
import userSliceReducer from "./userSlice"

const store = configureStore({
    reducer: {
        products: productSliceReducer,
        user: userSliceReducer
    }
})

export default store; 