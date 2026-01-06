import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ADDTOCART,REMOVE } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";


const SingleProduct = () => {

    let dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                let res = await axios.get( `https://dummyjson.com/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }

        fetchProduct();
    }, [id]);

    if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

    return (
        <div className="container py-5">
            <h1>{product.title}</h1>
            <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <p className="mt-3">{product.description}</p>
            <h3 className="mt-3">Price: ${product.price}</h3>

            <button className="btn btn-primary" onClick={()=>dispatch(ADDTOCART({...product,quantity:1}))}>ADD TO CART</button>
            <button className="btn btn-danger" onClick={()=>dispatch(REMOVE({...product.id}))}>REMOVE</button>
        </div>
    );
};

export default SingleProduct;