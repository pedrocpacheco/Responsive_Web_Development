import React from "react";
import image from "../assets/a.png"

export default function RecebeAtributos(props){
    const alunos = ["Pedro", "Gabriel", "Henrique"]
    return <>
        <h2>Recebendo Atributos</h2>
        {props.children}
        <img src={image}/>
        <ListAlunos></ListAlunos>
    </>
}