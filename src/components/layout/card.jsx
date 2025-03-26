import "./card.css"
import React from 'react'

export default props => {
    return (
        <div className="card">
            <div>Conteúdo</div>
            <div>{props.titulo}</div>
        </div>
    )
}