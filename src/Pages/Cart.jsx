// import { Counter } from "../REDUX/Counter/Counter"
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../redux/CartSlice";

export const Cart = () => {
    let cartData = useSelector(state => state.cart)
    const dispatch=useDispatch()
    // console.log(cartData, Array.isArray(cartData));


    return (
        <>
            {/* {
            cartData.map(product=>(
             {
            <div className="container py-5">
            <h1>{product.title}</h1>
            <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px", height: "300px", objectFit: "cover" }}/>
            <p className="mt-3">{product.description}</p>
            <h3 className="mt-3">Price: ${product.price}</h3>
        }
            ))
        } */}

            <div className="container py-5">
                <h2 className="text-center">My Cart</h2>

                {cartData.length === 0 && <h4>Cart is empty</h4>}

                {cartData.map(product => (
                    <div key={product.id} className="mb-4 border p-3">
                        <h4>{product.title}</h4>

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ width: "200px" }}
                        />
                        <h5>Price: ${product.price}</h5>
                        <p>Quantity: {product.quantity}</p>
                        <button className="btn btn-primary mx-3" onClick={()=>dispatch(Increment(product.id))}>INC</button>
                        <button className="btn btn-danger mx-3" onClick={()=>dispatch(Decrement(product.id))}>DEC</button>
                    </div>

                ))}
            </div>

        </>
    )
}