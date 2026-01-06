import { useDispatch, useSelector } from "react-redux"
import {INC,DEC} from "../Counter/CounterSlice"

export const Counter=()=>{


    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch();

    return(
        <>
        <center>
            <h1>Count:</h1>
            <h2>{count}</h2>
            <button className="btn btn-primary" onClick={()=>dispatch(INC())}>INCREMENT</button>
         <button className="btn btn-primary" onClick={()=>dispatch(DEC())}>DECREMENT</button>
        </center>
        </>
    )
}