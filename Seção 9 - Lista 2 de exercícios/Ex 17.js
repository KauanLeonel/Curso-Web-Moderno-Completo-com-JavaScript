// Escreva uma função que receba um array e retorne a soma dele

const soma = (acumulador, valorAtual = 0) => acumulador + valorAtual

teste1 = [1,2,3,4,5,6]
teste3 = [2,4,6,3,7]

console.log(teste1.reduce(soma)) //Não esquecer que o reduce percorre todo array fazendo a função passada
console.log(teste3.reduce(soma))