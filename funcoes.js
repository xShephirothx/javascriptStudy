const nome = "Marcos"

//  1) Declara a função
                    //string
function imprimeTexto(texto){
    console.log(texto)
}

// 2) Executa a função (1 ou + vezes)

imprimeTexto('oi meu nome é '+nome)
imprimeTexto('Hello World')

//Função sem parâmetro

function soma(){
    return 2+2;
}

console.log(soma())

// E existem diversos outros códigos de função que já estão prontos no JAVASCRIPT, o que é o caso da função MATH (matemáticas):

//Math.round Arredonda para o valor mais próximo
console.log(Math.round(4.3)) //Retorna 4
console.log(Math.round(4.8)) //Retorna 5

//Math.ceil() arredonda para o valor mais alto, ex: 4.3 irá retornar 5
//Math.floor() arredonda para o valor mais baixo, ex: 4.8 irá retornar 4
//Math.trunc() desconsidera os números decimeis, ex: 4.75 irá retornar 4
//Math.pow() Faz a exponenciação de 2 números, ex: (4,2) retorna 4^2 = 16
//Math.sqrt() Retorna a raiz quadrada de um número, ex: 49 irá retornar 7
//Math.min() Retorna o menor valor entre os argumentos, ex: (0, 15, -18) irá retornar -18
//Math.max() Retorna o maior valor entre os argumentos, ex: (0, 15, -18) irá retornar 15
//Math.random() retorna um valor randômico entre 0 e 1, ex: 0,74596874684

// Para ver mais funções matemáticas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description



