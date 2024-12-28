/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

vet1 = [1,2,3,4,5,6]
vet2 = 2
vet3 =[]

function multi(vet, n){
    for(i = 0; i < vet.length; i++){
        vet[i] = vet[i]*n
    }
    return vet
}

function multiMaiorQueCinco(vet, n){
    if (n > 5) {
        for(j = 0; j < vet.length; j++){
        vet3[j] = vet[j]*n
    }
    return vet3}
}
console.log(multi(vet1, vet2))
console.log(multiMaiorQueCinco(vet1, 6))