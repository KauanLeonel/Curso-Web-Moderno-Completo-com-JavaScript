/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let vet = [1,-2,3,4,-5,6,7]
let negativo = 0 
for (i in vet){
    if (vet[i] < 0) negativo++;
}

console.log("Há", negativo, "números negativos")