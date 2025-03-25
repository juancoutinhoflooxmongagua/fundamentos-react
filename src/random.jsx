import React from "react"

let min = 1; let max = 10

let random_number = Math.floor(Math.random() * (max - min +1))

export default function Frags(props) {
    return (
        <>
            <p>{ random_number }</p>
        </>
    )}