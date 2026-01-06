import { Component } from "react"
import { ProductsData } from "../Features/ProductList/ProductsData"



export const Products = () => {
    return (
        <>
            <h1 className="text-center bg-light">This is Products Page</h1>
         <ProductsData/>
        </>
    )
}