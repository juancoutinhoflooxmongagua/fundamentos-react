import React from "react";
import "./Contador.css"; 

export default function Buttons(props) {
    return (
        <div className="buttons">
            <button onClick={props.inc} className="btn btn-inc">+</button>
            <button onClick={props.dec} className="btn btn-dec">-</button>
        </div>
    );
}
