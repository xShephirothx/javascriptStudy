// Criando um Array
var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2

// Acessar um item (index) do Array
var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana

// Iterar um Array
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
});
// Maçã 0
// Banana 1

// Adicionar um item ao final do Array

var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']

//Remover um item do final do Array

var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];

//Remover do início do Array

var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];

// Adicionar ao início do Array
var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];

// Procurar o índice de um item na Array
var pos = frutas.indexOf('Banana');
// 1

var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
