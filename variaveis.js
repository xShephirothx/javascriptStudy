// Existem 3 tipos de declarar variáveis em Javascript:

// Var é uma delas.

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area)

// Let é a segunda.

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === "retangulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento)/2;
}

console.log(area)

// Const é a terceira, e é constante.

// CONVERSÃO DE TIPOS

// Conversão implícita

let numero = 5;
let numeroString = '5';

console.log(numero == numeroString)

// 1 = atribuir valor a uma variável
// 2 == comparando o valor/conteúdo da variável sem se atentar ao tipo
// 3 === compara não só o valor mas também o tipo da variável 

// Conversão explícita
console.log(numero + Number(numeroString)) // Converte de string para "Number()"
console.log(String(numero) + numeroString) // Converte de número para "String()"

console.log(numero.toString() + " em formato de String") // Outra forma de conversão para string

// Nomes reservados pela linguagem:
// Variable declaration not allowed at this location
// let var = 0;
// let if = "alura"
// let const = "ABC"
// Variable declaration not allowed at this location


