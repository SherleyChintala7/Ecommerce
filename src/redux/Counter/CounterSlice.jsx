import { createSlice } from "@reduxjs/toolkit";


let CounterSlice=createSlice(
    {
    name:"Counter",
    initialState:0,
    reducers:{
        INC:(state,action)=>{
            return state+1;
        },
        DEC:(state,action)=>{
            return state-1;
        }
    }
})

export const{INC,DEC}=CounterSlice.actions
export default CounterSlice.reducer