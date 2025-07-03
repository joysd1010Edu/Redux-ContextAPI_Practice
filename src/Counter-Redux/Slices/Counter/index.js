import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice= createSlice({
    initialState:{count:0, name:"JoySd"},
    name:"Counter",
    reducers:{
        increment:(state)=>{
            state.count= state.count + 1;
        },
        decrement:(state)=>{
            state.count= state.count - 1;
        },
        reset:(state)=>{
            state.count= 0;
        }
    }

})