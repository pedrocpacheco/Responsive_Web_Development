import React from "react";
import "./App.css" // ? Importar CSS vai direto, sem alias
import Componente from "./Componente";

export default function App(){
  return <>
    <h1 className="title">Corinthians</h1>
    <h1 style={ styles.paragraph }>Salve o Corinthians o Campeão dos Campeões</h1>
    <Componente />
  </>
}

const styles = {
  paragraph : {
    fontSize: '2em'
  }
}