import { useEffect } from "react";
import Menu from "./Menu";

import "../css/nav.css";
import { Link } from "react-router-dom";

function Navbar({ type }) {
  useEffect(function () {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("border-bottom");
        // const navbar_height = document.querySelector(".navbar").offsetHeight;
        // document.body.style.paddingTop = navbar_height + "px";
      } else {
        nav.classList.remove("border-bottom");
      }
    });
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="text-success  fw-bolder">
            Application of Queue Theory
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto mb-2 mb-lg-0"></div>
          <div className="d-flex">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
