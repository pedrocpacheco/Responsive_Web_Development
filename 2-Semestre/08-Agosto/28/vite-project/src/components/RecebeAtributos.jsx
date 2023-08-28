import React from "react";

export default function RecebeAtributos({ name, children }){
    return <>
        <h2>Recebendo Atributos:</h2>
        <p>{ name }</p>
        <p>{ children }</p>
    </>
}