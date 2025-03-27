import React from "react";
import _if from "./if";
import If from "./if";
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
            Seja bem vindo { usuario.nome }
            </If>
        </div>
    )
}