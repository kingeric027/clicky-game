import React from "react";
import "./style.css";

function Factdiv(props) {
  return <div className="fact-div">
  <p>{props.fact}</p>
  </div>;
}

export default Factdiv;