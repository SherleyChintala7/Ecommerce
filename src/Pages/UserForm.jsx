import React from "react";
import { SignUp } from "../Features/Authentication/SignUp";
import { Link } from "react-router-dom";

export const UserForm = () => {
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="Sample"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="container col-2 mt-3 p-5 d-flex gap-2">
                                        <Link className="nav-link" to="/Signup">
                                            <button className="btn btn-primary" > SignUp</button>
                                        </Link>
                                        <Link className="nav-link" to="/Login">
                                            <button className="btn btn-primary" > Login</button>
                                        </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

