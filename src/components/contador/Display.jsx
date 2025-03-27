import React from "react";
import "./Contador.css"; 

export default function Display(props) {
    return (
        <div>
            <h2>Contador</h2>
            <p className="number">{props.number}</p>
        </div>
    );
}
