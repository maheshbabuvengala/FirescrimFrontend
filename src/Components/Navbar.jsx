import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`container-fluid hi ${sticky ? "fixed hi" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <h1>FireScrim</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/home">
                    <h3>Home</h3>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/transactions">
                    <h3>My Transactions</h3>
                  </Link>
                </li>
              </ul>
              <span>
                <button className="btn btn-primary btn-lg"><Link className="nav-link" to="/login">Logout</Link></button>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
