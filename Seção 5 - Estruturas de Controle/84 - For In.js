const notas = [0, 1, 2, 3, 4, 5, 6]

// For in serve para percorrer um determinado array 

for (i in notas){
    console.log (i, notas[i]);
}

const obj = {
    nome: 'Clarisse',
    sobrenome: 'Lispector',
    idade: 34,
    peso: 535.
}

for (atribuicao in obj){
    console.log (`${atribuicao} = ${obj[atribuicao]}`)
}