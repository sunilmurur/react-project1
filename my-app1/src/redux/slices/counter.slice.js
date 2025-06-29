import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'Counter',
    initialState: {value:0},
    reducers:{
        Increment : (state,action) => {
            state.value += 1
        },
        Decrement : (state,action) => {
            state.value -=1
        },
        Reset : (state,action) => {
                state.value = 0;
        },
        ConditionalAdd : (state,action) => {
            state.value  += Number(action.payload);
        }
    }
})

export const {Increment,Decrement, Reset,ConditionalAdd} = counterSlice.actions;
export default counterSlice.reducer