import { createContext } from "react"
import { Child } from "./Child";

export const dataContext = createContext();

export const Parent = () => {


    const mobiles = [
        { id: 1, title: "iPhone", desc: "Apple’s flagship phone", img: "./public/iphone17.webp", price: 80000 },
        { id: 2, title: "Vivo", desc: "High-performance Android phone", img: "./public/vivo.webp", price: 25000 },
        { id: 3, title: "Nokia", desc: "Classic durable smartphone", img: "./public/nokia.webp", price: 18000 },
        { id: 4, title: "Pixel", desc: "Google’s clean Android experience", img: "./public/googlepixel.webp", price: 70000 },
        { id: 5, title: "Redmi", desc: "Apple’s flagship phone", img: "./public/redmi.webp", price: 80000 },
        { id: 6, title: "Motorola", desc: "High-performance Android phone", img: "./public/motorola.webp", price: 25000 },
        { id: 7, title: "Samsung", desc: "Classic durable smartphone", img: "./public/Samgalaxy.webp", price: 18000 },
        { id: 8, title: "Samsung Galaxy", desc: "Google’s clean Android experience", img: "./public/samsung.webp", price: 70000 },
    ];

    return (
        <>
            <dataContext.Provider value={mobiles}>
                <center>
                    <Child />
                </center>
            </dataContext.Provider>
        </>
    )
}










// import { createContext } from "react"
// import { Child } from "./Child";
// export const dataContext=createContext();

// export const Parent =()=>{
//     const data='Sherley'


//     return(
//         <>
//        <dataContext.Provider value={data}>
//          <center>
//         <h1>This is Parent Component</h1>
//         <Child/>
//         </center>
//        </dataContext.Provider>
//         </>
//     )
// }