import "./card.css"
import React from 'react'

export default props => {
    return (
        <div className="card">
            <div className="card-header">
                <i className={`icon ${props.iconClass}`}></i> {/* Ícone vindo como prop */}
                <h2>{props.titulo}</h2>
            </div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    )
}
