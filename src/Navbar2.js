import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";

const Navbar2 = (props) => {
  return (
    <div className="nav-bar">
      <h2 className="heading">{props.value}</h2>
    </div>
  );
};

export default Navbar2;
