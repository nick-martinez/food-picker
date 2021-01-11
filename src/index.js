import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Componenets/Welcome/Welcome";
import "./index.css";

var destination = document.getElementById("container");

ReactDOM.render(
  <div>
    <Welcome />
  </div>,
  destination
);