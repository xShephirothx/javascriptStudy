// Tipos primitivos = Tipo number

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica)

// Ponto flutuante 

const numeroPontoFlutuante = 3.3;
const numeroFlutuanteSemZero = .5; //minha opinião: Bacana, mas inútil

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao.toFixed(2))
console.log(novaOperacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

// NaN -> Not a Number (Não é um número)

const alura ="Alura"

console.log(alura * primeiroNumero)
console.log(Math.PI)

