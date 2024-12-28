/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

let vet = [1,2,3,4,5,6,7, 20, 19, 12, 42]
let par = 0, impar = 0
for(i = 0; i < vet.length; i++){
    if (vet[i] >= 10 && vet[i] <= 20){
        par++
    } else impar ++
}

console.log("Números entre 10 e 20:", par, "\nNúmeros fora do escopo:", impar)