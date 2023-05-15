function validar(){
    // Salvando valores de campos de formulario em variaveis
    var form = document.frLogin // Definindo uma variavel form pra nao ter que escrever sempre
    var nome = form.nome // Nome é o nome de um dos campos, e ai pegamos o seu value
    var senha =  form.senha // Mesma coisa com a senha

    
    if(nome.value == "" || nome.value == " "){
        erro(nome, "Escreve algo no nome ai")
        return false
    }

    else if(senha.value == "1234" || senha.value == "" || senha.value == " "){
        erro(senha, "Tu ta de sacanagem que vai meter essa senha?") 
        return false
    }
}

function erro(secao, mensagem){
    alert(mensagem)
    secao.style.backgroundColor = "red"
    secao.focus()

    document.getElementById("erro").innerText = "ERRO NA SEÇÃO " + secao.name.toUpperCase()
}








    // if(nome.value == "" || nome.value == " "){
    //     alert("Escreve algo no nome ai seu merdinha")

    //     nome.style.backgroundColor = "red"
    //     nome.focus() // Faz o cursor "ir" pro campo automaticamente

    //     document.getElementById("erro").innerText = "ERRO NA SEÇÃO NOME"
    //     return false // Quando validamos algo, e vimos que da ruim, precisamos retornar false // Para a ação do formulario parar
    // }