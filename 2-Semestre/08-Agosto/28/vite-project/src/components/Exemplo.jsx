import React from "react";
import RecebeAtributos from "./RecebeAtributos";

export default function Exemplo(){
    const props = {
        name: "Pedro",
        children: "Pacheco"
    }
    return <>
        <h1>PAPARAMEICANO</h1>
        < RecebeAtributos {...props} />
    </>
}