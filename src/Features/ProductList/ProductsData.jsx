import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export const ProductsData = () => {
    let [products, setProducts] = useState([])
    let [search, setSearch] = useState("")
    let [category, setCategory] = useState("")
    let [categoryList, setCategoryList] = useState([])
    let [page, setPage] = useState(1)
    let [btns, setBtns] = useState(0)
    let perPage = 10;

    useEffect(() => {
        async function catApi() {
            let { data } = await axios.get('https://dummyjson.com/products/category-list')
            console.log(data);
            setCategoryList(data)

        }
        catApi()
    }, [])

    useEffect(() => {
        async function dataApi() {
            let api;
            if (category) {
                api = `https://dummyjson.com/products/category/${category}`
            } else if (search) {
                api = `https://dummyjson.com/products/search?q=${search}`
            } else {
                api = `https://dummyjson.com/products?limit=100`
            }
            let { data } = await axios.get(api)
            // console.log(data.products);
            let allProducts = data.products || []
            setBtns(allProducts.length)
            let pagination = allProducts.slice((page - 1) * perPage, page * perPage)
            setProducts(pagination)
        }
        dataApi()
    }, [search, category, page])
    let viewBtns = Math.ceil(btns / perPage)
    return (
        <>
            <div className="container my-5">

                <div className="row my-5 justify-content-between">

                    {/* Search Input */}
                    <div className="col-5">
                        <input
                            type="text"
                            className="form-control"
                            value={search}
                            onChange={(e) => {
                                setPage(1)
                                setSearch(e.target.value)
                                setCategory("")
                            }}
                        />
                    </div>

                    {/* Categories Dropdown */}
                    <div className="col-5">
                        <select name="" id="" className="form-control"
                            onChange={(e) => {
                                setPage(1)
                                setCategory(e.target.value)
                                setSearch("")
                            }}>
                            <option value="">ALL CATEGORIES</option>
                            {
                                categoryList.map((cat, i) =>
                                    <option value={cat} key={i}>{cat}</option>
                                )
                            }
                        </select>
                    </div>

                </div>
                <div className="row">
                    {
                        products.map(product =>
                            // <div className="col-4" >
                            //     <div className="card p-4">
                            //         <h1>{product.title}</h1>
                            //         <img src={product.thumbnail} height={"200px"} alt="" srcset="" />
                            //         <p>{product.description} </p>
                            //     </div>
                            // </div>
                            <div className="col-4" key={product.id}>
                                <Link
                                    to={`/products/${product.id}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div className="card p-4">
                                        <h1>{product.title}</h1>
                                        <img src={product.thumbnail} height="200px" />
                                        <p>{product.description}</p>
                                    </div>
                                </Link>
                            </div>


                        )
                    }
                </div>
                <div className="row my-5 justify-content-center">
                    {
                        viewBtns > 0 &&
                        Array.from({ length: viewBtns }, (_, i) => i + 1).map(btn =>
                            <div className="col-1">
                                <button className="btn btn-primary" onClick={() => setPage(btn)}>{btn}</button>
                            </div>
                        )
                    }

                </div>
            </div>

        </>
    )
}

























// import { useEffect, useState } from "react";
// import axios from "axios";
// export const ProductsData = () => {
//     let [products, setProducts] = useState([])
//     let [page, setPage] = useState(1)
//     let totalCards = 10;

//     useEffect(() => {
//         async function productsApi() {
//             // let dataApi = await fetch('https://dummyjson.com/products?limit=100')
//             // let { products } = await dataApi.json()
//             // console.log(products);
//             let { data } = await axios.get('https://dummyjson.com/products?limit=100')
//             console.log(data.products);
//             setProducts(data.products)


//         }
//         productsApi()
//     }, [])
//     let pagination = products.slice((page - 1) * totalCards, page * totalCards)
//     return (
//         <>
//             <div className="container">
//                 <div className="row ">
//                     {
//                         pagination.map(item => (
//                             <div className="col-3 card my-3">
//                                 <img src={item.thumbnail} alt="" />
//                                 <div className="card-body">
//                                     <h2 className="card-title">{item.title}</h2>
//                                     <p className="card-text">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className="row justify-content-center my-5">
//                     {
//                         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(btn => (
//                             <div className="col-1">
//                                 <button className="btn btn-outline-primary" onClick={() => setPage(btn)}>{btn}</button>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>


//         </>
//     )
// }