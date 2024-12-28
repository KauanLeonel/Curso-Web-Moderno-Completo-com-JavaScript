//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let vet = [1,2,3,4,5,6,7]
let maior = vet[1], menor = vet[1]
for (i in vet){
    if (vet[i] > maior) maior = vet[i];
    if (vet[i] < menor) menor = vet[i];
}

console.log("O maior número é: ", maior, "/nO menor número é", menor)