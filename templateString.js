// conseguimos concatenar strings utilizando o operador +

const nome = 'Marcos';
const idade = 2021-1994;
const cidadeDeNascimento = 'Guarulhos'

const apresentacao = 'meu nome é ' + nome + ' , minha idade é ' + idade + ' e, nasci na cidade de ' + cidadeDeNascimento;
console.log(apresentacao)

// Utilizando o Template String:

const apresentacaoTemplateString = `meu nome é ${nome}, minha idade é ${idade}, e, nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacaoTemplateString)

// Praticando:
// Dado as variáveis abaixo:

a = []
b = 20
c = true 
d = ''

// Quais opções apresentam a saída "VERDADE"
// Opção A:

if ( b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// Opção B:

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// Opção C: // Único que dá FALSO

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// Opção D:

if (b =='20') {
    console.log('Verdade4')
} else {
    console.log('Falso')
}
