import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        removeData: (state) => {
            state.status = false;
            state.data = null;
        }
    }
})

export const { setData, removeData } = productSlice.actions;

export default productSlice.reducer;