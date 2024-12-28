/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

let impares = function(inicio, fim){
    menor = inicio, maior = fim
    if(inicio > fim){
        maior = inicio
        menor = fim
    }
    for(menor; menor <= maior; menor++){
        if (menor % 2 != 0) console.log(menor)
    }
}

impares(100,200)