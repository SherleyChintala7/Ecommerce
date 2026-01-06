import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

let CartSlice = createSlice({
    name: "cart",
    initialState: cartData,

    reducers: {
        ADDTOCART: (state, action) => {
            let product = action.payload
            let existingItem = state.find(item => item.id == product.id)

            if (existingItem) {
                existingItem.quantity += 1
            }
            else {
                state.push(product)
            }
            localStorage.setItem("cartData", JSON.stringify(state))
        },

        REMOVE: (state, action) => {
            let product = action.payload
            let updatedcart = state.filter(item => item.id !== product.id)
            localStorage.setItem("cartData", JSON.stringify(updatedcart))
            return updatedcart
        },

        Increment: (state, action) => {
            const product = state.find(
                item => item.id === action.payload
            );

            product && (product.quantity += 1);
        },

        Decrement: (state, action) => {
            const product = state.find(
                item => item.id === action.payload
            );

            if (product.quantity > 1) {
                product.quantity -= 1
            } else {
                return state.filter(item => item.id !== action.payload);
            }
        }
    }})
export const { ADDTOCART,REMOVE } = CartSlice.actions
export const {Increment,Decrement}=CartSlice.actions
export default CartSlice.reducer