// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vet = [1,2,3,4,5,6,7]
let par = 0, impar = 0
for (i in vet){
    if (vet[i] % 2 == 0){
        par++
    } else impar ++
}

console.log(par, impar)