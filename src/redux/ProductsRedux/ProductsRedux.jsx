import { useEffect } from "react"
import {useDispatch,useSelector} from 'react-redux'


export const ProductsRedux=()=>{

    let {items,loading,error}=useSelector(state=>state.products)
    
    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    
    return(
        <>
        <h1>Products</h1>
        </>
    )
}