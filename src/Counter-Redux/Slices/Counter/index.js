import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice= createSlice({
    initialState:{count:0, name:"JoySd", inputValue: ""},
    name:"counter",
   reducers: {
        increment: (state, action) => {
            // If payload is provided, use it; otherwise default to 1
            state.count = state.count + (action.payload || 1);
        },
        decrement: (state, action) => {
            // If payload is provided, use it; otherwise default to 1
            state.count = state.count - (action.payload || 1);
        },
        reset: (state) => {
            state.count = 0;
        },
        // New reducer for setting to a specific value
        setCount: (state, action) => {
            state.count = action.payload;
        },
        // New reducer for updating input value
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        // New reducer for setting count to input value
        set: (state, action) => {
            state.count = action.payload;
        }
    }

})

// Export actions
export const { increment, decrement, reset, setCount, setInputValue, set } = CounterSlice.actions;

// Export reducer
export default CounterSlice.reducer;