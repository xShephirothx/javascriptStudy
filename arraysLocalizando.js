const alunos = ['João','Juliana','Caio','Ana']
const notas = [10,7,9,6]

let listaDeNotasEAlunos = [alunos,notas]

// Usamos uma arrowfunction
const exibeNomeNota = (nomedoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomedoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomedoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua média é " + listaDeNotasEAlunos[1][indice]
    }else{
        return 'O aluno não está cadastrado'
    }
}

console.log(exibeNomeNota('Ana'))
