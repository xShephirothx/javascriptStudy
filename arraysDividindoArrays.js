// Uma array com muitos alunos precisa ser dividida

const nomes = ['João','Juliana','Ana','Caio','Lra','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo']

console.log(nomes)

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1} \n e alunos da sala 2: ${sala2}`)


