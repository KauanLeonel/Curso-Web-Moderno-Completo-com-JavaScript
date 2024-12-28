/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

let n = 10, a1 = 0, r = 1

function progressaoAri(n, a1, r){
    let soma, vet =[];

    for (a1; a1 < n; i++){
        vet[a1] = a1 + r  
        
    }
    return vet
}

console.log(progressaoAri(n, a1, r))