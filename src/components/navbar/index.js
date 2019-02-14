import React from "react";
import "./style.css";

function Navbar(props) {
    return (
    <nav className = "navbar">
        <ul>
            <li className="brand">
                <a href="/"><strong>National Parks Clicky-Game!</strong></a>
            </li>
            <li>
                <h5>{props.correct}</h5>
            </li>
            <li>
                <h5>Score: {props.score} | Top Score: {props.high}</h5>
            </li>
        </ul>
    </nav>
  
    );
};

export default Navbar;