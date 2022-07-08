// Parâmetros de função


function soma(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = 10;
let numero2 = 19;

console.log(soma(numero1,numero2))

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e eu tenho ${idade} anos`
}

console.log(nomeIdade('Marcos', 27))

function mutiplicacao(numero1 = 1,numero2 = 1) { // Dessa forma iniciamos os parâmetros com o valor 1, mas ele recebe um novo valor quando a função é chamada
    return numero1 * numero2
}

console.log(mutiplicacao(8))

//--------------------------------

function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// OUTRA FORMA DE ESCREVER FUNÇÃO: Expressão de função

const subtracao = function(numero1, numero2) {return numero1 - numero2}
console.log(subtracao(10,3))

// A principal diferença (Hoisting) entre os dois métodos de função é que a expressão de função só pode ser acessada DEPOIS de ser inicializada.
// Quando iniciamos como uma variável (const) ela é tratada no JS da mesma forma que uma variável, se não for inicializada ela dá erro se for chamada antes.


//TERCEIRA FORMA DE ESCREVER FUNÇÕES
// Arrowfunction

const apresentaArrow = nome => `meu nome é ${nome}`;
const somaArrow = (numero1, numero2) => numero1 + numero2;

//Essa função não pode ser nomeada


// Arrow Function com mais de uma linha:

const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 20) {
        return 'Somente números de 1 a 9'
    } else {
        return numero1 + numero2
    }
}

// Importante declarar primeiro e depois chamar, pois ArrowFunction também se comporta com HOISTING (âncoragem)

console.log(somaNumerosPequenos(11,19))

