import { createSlice } from "@reduxjs/toolkit";

export const APICallSlice = createSlice({
    initialState: { data: [], loading: false, error: null },    
    name: "apiCall",
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
// Export actions
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = APICallSlice.actions;
// Export reducer
export default APICallSlice.reducer;