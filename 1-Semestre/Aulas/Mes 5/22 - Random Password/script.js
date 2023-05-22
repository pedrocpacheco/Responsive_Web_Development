const upperEL = document.getElementById("upper")
const lowerEL = document.getElementById("lower")
const numberEL = document.getElementById("number")
const symbolsEL = document.getElementById("symbols")
const generateEL = document.getElementById("generate")
const pwEL = document.getElementById("pw")

const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const upperLetters = abecedario.toUpperCase()
const lowerLetters = abecedario.toLowerCase()
const numbers = "0123456789"
const symbols = "!@#$%&*()^~+-|_"

function getIndex(string){
    index = Math.floor(Math.random() * string.length)
    returnindex
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