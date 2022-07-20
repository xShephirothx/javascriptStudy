// Ana, Marcos, Maria, Mauro
// 7, 4.5, 8, 7.5

const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7,4.5,8,7.5]

let nomesENotas = [nomes,notas]

// Usando for

for (let index = 0; index < nomesENotas[0].length; index++) {
    if (nomesENotas[1][index] <= 5) {
        console.log(`O aluno ${nomesENotas[0][index]} possui média ${nomesENotas[1][index]} e por isso está reprovado!`)
    }
}

// Usando o filter

const reprovados = nomes.filter ((aluno, indice) => notas[indice]<5)

console.log(`Reprovados: ${reprovados}`)
