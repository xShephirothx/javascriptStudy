// Criando Arrays com 2 dimensões (Matriz)

const alunos = ['João','Juliana','Caio','Ana']
const notas = [10,7,9,6]

let listaDeNotasEAlunos = [alunos,notas]

for (let index = 0; index < listaDeNotasEAlunos[0].length; index++) {
    console.log(`Nome: ${listaDeNotasEAlunos[0][index]} sua nota é: ${listaDeNotasEAlunos[1][index]}`)
}
