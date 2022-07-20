const nomes = ['ana Julia','caio vinicius','BIA silva']
const nomesAtualizados = []

// Utilizando função forEach

nomes.forEach(atualizaNomes)

function atualizaNomes(nome, indice) {
    nomesAtualizados[indice] = nome.toUpperCase()
}
console.log(nomesAtualizados)

// Utilizando a função maps()

const nomesAtualizadosMap = nomes.map( nomes => nomes.toUpperCase())
console.log(nomesAtualizadosMap)
