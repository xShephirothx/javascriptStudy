const notas = [10,9,8,7,6]
const notasAtualizadas = []

// Utilizando função forEach

notas.forEach(atualizaNotas)

function atualizaNotas(nota, indice) {
    if (nota == 10){
        notasAtualizadas[indice] = nota
    } else {
        notasAtualizadas[indice] = nota+1
    }
}

console.log(notasAtualizadas)

// Utilizando a função maps()

//const notasAtualizadasMap = notas.map( nota => nota +1 )

const notasAtualizadasMap = notas.map( nota => nota == 10 ? nota : ++nota )
console.log(notasAtualizadasMap)


