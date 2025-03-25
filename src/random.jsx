import React from "react"

let min = 1; let max = 10

let random_number = Math.floor(Math.random() * (max - min +1))

export default function Frags(props) {
    return (
        <>
            <h1>Número Aleatório do dia.</h1>
            <p>{ random_number }</p>
        </>
    )}