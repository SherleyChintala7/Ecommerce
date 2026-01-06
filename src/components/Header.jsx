import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let cartdata=useSelector(state=>state.cart)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="#">Home</Link>
              <Link className="nav-link" to="/Products">Products</Link>
              <Link className="nav-link" to="/Cart">Cart <sup>{cartdata.length}</sup></Link>
              <Link className="nav-link" to="/Blog">Blog</Link>
              <Link className="nav-link" to="/UserForm">UserForm</Link>
              <Link className="nav-link" to="/UserList">UserList</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

