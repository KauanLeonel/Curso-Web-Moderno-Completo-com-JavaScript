// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function media (vet){
    res = 0
    for(i = 0; i < vet.length; i++){
        res += vet[i]
    }
    return res/vet.length
}

let vet = [1,3,5,7,3,7,4,2,6]
console.log(media(vet))