import { createSlice } from "@reduxjs/toolkit";
let cartdata=JSON.parse(localStorage.getItem("cartdata"))|| []

let cartSlice=createSlice({
    name:"Cart",
    initialState:cartdata,


    reducers:{
        ADDTOCART:(state,action)=>{
            let product=action.payload
            let existingItem=state.find(item=>item.id==product.id)
            if(existingItem){
                existingItem.quanity+=1
            }else{
                state.push(product)
            }


            // adding local storage

            localStorage.setItem("cartdata",JSON.stringify(state))
        },


        REMOVE:(state,action)=>{
            let product=action.payload
            let updatedcart=state.filter(item=>item.id!==product)
             localStorage.setItem("cartdata",JSON.stringify(updatedcart))
             return updatedcart
        }
    }
})

export const {ADDTOCART}=cartSlice.actions
export default cartSlice.reducer