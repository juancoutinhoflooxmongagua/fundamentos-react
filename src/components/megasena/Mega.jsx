import React, { useState } from "react";

function genNumber(qtde) {
    const numbers = Array(qtde).fill(0).reduce((nums) => {
        const newNumber = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, newNumber];
    }, []).sort((a, b) => a - b); // Ordenando os números gerados

    return numbers;
}

function gerarNumeroNaoContido(min, max, array) {
    const random = parseInt(Math.random() * (max - min + 1)) + min;
    
    if (!array.includes(random)) {
        return random;
    } else {
        return gerarNumeroNaoContido(min, max, array);
    }
}

export default function Mega(props) {
    const [numbers, setNumbers] = useState(genNumber(props.qtde || 6));

    return (
        <div>
            <h2>Mega</h2>
            <p>{numbers.join(", ")}</p> {/* Para exibir os números separados por vírgula */}
            <button onClick={_ => setNumbers(genNumber(props.qtde || 6))}>Gerar Numeros</button>
        </div>
    );
}
