import React from "react";
import '../../data/letras';  
export default props => {
   const letras = [
        { id: 1, letra: "A" },
        { id: 2, letra: "B" },
        { id: 3, letra: "C" }
    ];

    const li1 = (
        <li>
            {letras[0].id} - {letras[0].letra}
        </li>
    );

    const lis = letras.map(letra => {
        return (
            <li key={letra.id}>
                {letra.id}) {letra.letra} -{">"} {letra.letra}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {li1}  {}
                {lis}  {}
            </ul>
        </div>
    );
}
