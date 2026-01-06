import { useContext } from "react"
import { dataContext } from "./Parent"


export const SubChild = () => {


    const data = useContext(dataContext)
    return (
        <>
            <h1>Welcome to Mobile Store</h1>
            <center>
                <div className="card container mt-4">
                    <div className="row justify-content-center">
                            {data.map((mobile) => (
                                <div key={mobile.id} className="col-md-6 col-lg-5 g-5">
                                    <img src={mobile.img} alt="" style={{height:"300px",width:"250px"}} />
                                    <h2 className="card-text">{mobile.title}</h2>
                                    <p className="card-text">{mobile.desc}</p>
                                    <mark>{mobile.price}</mark>
                                </div>
                            )
                            )}
                        </div>
                    </div>
            </center >
        </>
    )
}




















// import { useContext } from "react"
// import { dataContext } from "./Parent"

// export const SubChild =()=>{


// const user=useContext(dataContext)
//     return(
//         <>
//         <center>
//             <h3>This is SubChild Component</h3>
//             <h4>Welcome {user}</h4>
//         </center>
//         </>
//     )
// }