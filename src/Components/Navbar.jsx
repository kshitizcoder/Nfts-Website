import React from "react";
import Button from "./Button";
import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="img-fluid" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars navbar-toggler-icon"></i>
            {/* <span className="navbar-toggler-icon" /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#artist">
                  Artist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#community">
                  Community
                </a>
              </li>
            </ul>
            <Button text={"Sign Up"} style={" gradinetBtn signUp"} />
            <Button text={"Log In"} style={"boderBtn"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
