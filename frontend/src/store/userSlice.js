import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const userSlice = createSlice({
    name: "user",
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

export const { setData, removeData } = userSlice.actions;

export default userSlice.reducer;