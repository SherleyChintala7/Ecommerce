import { configureStore } from "@reduxjs/toolkit";
import counterOperation from "./Counter/CounterSlice"
import cartOperation from "./CartSlice"
// import productsOper from "./ProductsRedux/ProductsSlice"
export default configureStore(
    {
        reducer:{
            counter:counterOperation,
            cart:cartOperation,
            // products:productsOper,
        }
    }
)