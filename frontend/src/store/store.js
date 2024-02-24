import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "./productSlice";
import userSliceReducer from "./userSlice"
import supplierSliceReducer from "./supplierSlice"

const store = configureStore({
    reducer: {
        products: productSliceReducer,
        user: userSliceReducer,
        supplier: supplierSliceReducer
    }
})

export default store; 