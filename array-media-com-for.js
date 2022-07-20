// Desafio - Média
// Calcular a média entre as seguintes notas usando o For:

let notas = [10, 6.5, 8, 7.5]
let soma = 0

for (let index = 0; index < notas.length; index++) {
    soma += notas[index];
}
soma = soma/(notas.length)

console.log(`A média das notas é ${soma.toFixed(2)}`)

// Usando a média com Foreach

let notasForEach = [10, 6.5, 8, 7.5]
let somaForEach = 0

notasForEach.forEach( nota => {
    somaForEach += nota
});

somaForEach = somaForEach/notasForEach.length

console.log(`A média das notas Foreach é ${somaForEach}`)

// Testando ForEach:

let frutas = ['Maça','Banana','Pera','Morango']

frutas.forEach(fruta => {
    console.log(`A fruta da vez é: ${fruta}`)
});
