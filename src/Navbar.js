import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <h2 className="heading">My Cart ({props.count})</h2>
    </div>
  );
};

export default Navbar;
