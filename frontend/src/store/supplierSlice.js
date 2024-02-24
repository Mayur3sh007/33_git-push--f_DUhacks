import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const supplierSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSupplier: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        removeSupplier: (state) => {
            state.status = false;
            state.data = null;
        }
    }
})

export const { setSupplier, removeSupplier } = supplierSlice.actions;

export default supplierSlice.reducer;