function validar(){
    
    // Salvando valores de campos de formulario em variaveis
    var caminho = document.frLogin // Definindo uma variavel caminho pra nao ter que escrever sempre
    let nome = caminho.nome.value // Nome é o nome de um dos campos, e ai pegamos o seu value
    var senha =  caminho.senha.value // Mesma coisa com a senha

    if(nome == "" || nome == " "){
        alert("Escreve algo no nome ai seu merdinha")
        return false // Quando validamos algo, e vimos que da ruim, precisamos retornar false
                     // Para a ação do formulario parar
    }

    document.getElementById("erro").innerText = nome + " " + senha
}