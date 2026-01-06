import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "../Pages/Home";
import { Products } from "../Pages/Products";
import SingleProduct from "../Features/ProductList/SingleProduct";
import { Cart } from "../Pages/Cart";
import  {UserForm} from "../Pages/UserForm";
import { Login } from "../Features/Authentication/Login";
import { SignUp } from "../Features/Authentication/SignUp";
import { UserList } from "../Pages/UserList";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<UserForm/>}/>
      <Route path="/Products" element={<Products />} />
      <Route path ="products/:id" element={<SingleProduct/>}/>
      <Route path="/Cart" element={<Cart />} />
      <Route path="/UserForm" element={<UserForm/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/UserList" element={<UserList/>}/>
    </Routes>
  );
};


// import React, { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// // Only Products is Lazy Loaded
// const Products = lazy(() => import("../Pages/Products"));

// // Normal Imports
// import Home from "../Pages/Home";
// import { Cart } from "../Pages/Cart";
// import { UserForm } from "../Pages/UserForm";
// import { Login } from "../Features/Authentication/Login";
// import { SignUp } from "../Features/Authentication/SignUp";

// export const AppRouter = () => {
//   return (
//     <Routes>

//       <Route path="/Home" element={<Home />} />

//       <Route path="/" element={<UserForm />} />

//       {/* Only this route is lazy loaded */}
//       <Route
//         path="/Products"
//         element={
//           <Suspense fallback={<h2 className="text-center mt-5">Loading Products...</h2>}>
//             <Products />
//           </Suspense>
//         }
//       />

//       <Route path="/Cart" element={<Cart />} />
//       <Route path="/UserForm" element={<UserForm />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Signup" element={<SignUp />} />

//     </Routes>
//   );
// };

