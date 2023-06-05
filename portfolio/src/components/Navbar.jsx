import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <Link className="Link Logo" to={"/"}>
          <h1 className="LogoText">Mobin.dev</h1>
        </Link>
        <div className="Navbar"> 
          <Link className="Link" to={"/"}>
            <span className="item">Home</span>
          </Link>
          <select className="DropDown">
            <option value="">Work</option>
            <option value="work-2">Work-2</option>
            <option value="work-3">Work-3</option>
            <option value="work-4">Work-4</option>
            <option value="work-5">Work-5</option>
          </select>
          <Link className="Link" to={"/about"}>
            <span className="item">About</span>
          </Link>
          <Link className="Link" to={"/projects"}>
            <span className="item">Projects</span>
          </Link>
          <Link className="Link" to={"/services"}>
            <span className="item">Services</span>
          </Link>
        </div>
        <Link className="Link">
          <button className="Btn">Let's chat</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
