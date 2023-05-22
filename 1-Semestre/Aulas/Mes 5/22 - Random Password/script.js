const upperEL = document.getElementById("upper")
const lowerEL = document.getElementById("lower")
const numberEL = document.getElementById("number")
const symbolsEL = document.getElementById("symbols")
const generateEL = document.getElementById("generate")
const passwordLengthEL = document.getElementById("length")
const buttonGenerateEL = document.getElementById("generate")
const passwordRespondEL = document.getElementById("pw")

const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const upperLetters = abecedario.toUpperCase()
const lowerLetters = abecedario.toLowerCase()
const numbers = "0123456789"
const symbols = "!@#$%&*()^~+-|_"

function getIndex(string){
    index = Math.floor(Math.random() * string.length)
    return index
}

function getUpperCase(){
    number = getIndex(upperLetters)
    return upperLetters[number]
}

function getLowerCase(){
    number = getIndex(lowerLetters)
    return lowerLetters[number]
}

function getNumber(){
    number = getIndex(numbers)
    return numbers[number]
}

function getSymbol(){
    number = getIndex(symbols)
    return symbols[number]
}

function generateCharacter(){
    const characters = []
    if(upperEL.checked){
        characters.push(getUpperCase())
    }
    if(lowerEL.checked){
        characters.push(getLowerCase())
    }
    if(numberEL.checked){
        characters.push(getNumber())
    }
    if(symbolsEL.checked){
        characters.push(getSymbol())
    }
    if(characters.length === 0) return ""
    teste = getIndex(characters)
    return characters[teste]
}

function createPassword(){
    const passwordLength = passwordLengthEL.value
    let password = ""
    for(i = 0; i < passwordLength; i++){
        digito = generateCharacter()
        password += digito
    }
    alert(password)
}

buttonGenerateEL.onclick = createPassword