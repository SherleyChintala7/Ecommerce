import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Products=createAsyncThunk('Products/fetch',async()=>{
    let {data}=await axios.get("https://dummyjson.com/Products")
    console.log(data.products);
    return data.products;
})

export const ProductsSlice=createSlice({

    name:'products',
    initialState:{
        items:[],
        loading:false,
        error: null
    }, 

    extraReducers:(builder)=>{
         builder
         .addCase(Products.pending,(state)=>{
          state.loading=true
         })
         .addCase(Products.fulfilled,(state,action)=>{
            state.loading=false;
            state=action.payload
         })
         .addCase(Products.rejected,(state,action)=>{
            state.loading=false;
            state=action.error.message
         })
    }
})
    
export default ProductsSlice.reducer