// Um operador ternário possui 3 operadores na mesma linha, como o exemplo abaixo:
console.clear()
const idadeCliente = 10;
const idadeMinima = 18;

console.log('Utilizando o operador ternário:')

console.log(idadeCliente >= idadeMinima ? 'Cerveja' : 'suco')

// Dessa forma, podemos fazer um "IF" em uma única linha, porém as boas práticas indicam a não usar o operador ternário

const idadeCliente2 = 19;

console.log('Utilizando o bom e velho IF ELSE:')

if (idadeCliente2 >= idadeMinima) {
    console.log('Cerveja')
} else {
    console.log('Suco')
}


