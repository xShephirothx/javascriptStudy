//Tipo primitivo String

const texto1 = "Hello World";
const texto2 = 'Hello World2s';

const texto3 = texto1 +' '+ texto2; //Concatenação é utilizado com (+)

console.log(texto3)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Veja mais em: https://unicode-table.com/en/

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true
console.log(input2.toUpperCase())

console.log(input2.length)

if (input2.length === 14) {
    console.log('true')
}else{
    console.log(false)
}

