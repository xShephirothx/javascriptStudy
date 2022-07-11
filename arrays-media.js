// tirar a média de uma escola com as medias 10, 6.5 ,8 , 7.5

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log(media)

// usando Array

const notasArray = [10,6.5,8,7.5]

let mediaArray = (notasArray[0] + notasArray[1] + notasArray[2] + notasArray[3]) / notasArray.length

console.log(mediaArray)

// outra opção usando laço de repetição FOR
let mediaArrayFor = 0
for (let index = 0; index < notasArray.length; index++) {
    mediaArrayFor = mediaArrayFor + notasArray[index]; 
}

console.log(mediaArrayFor/notasArray.length)
