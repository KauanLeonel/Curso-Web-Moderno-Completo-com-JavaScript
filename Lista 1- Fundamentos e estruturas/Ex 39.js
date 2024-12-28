/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaDeValores(vet1, vet2){
    for (let i = 0; i < vet1.length; i++){
        vet1[i] = vet1[i] + vet2[i]
        vet2[i] = vet1[i] - vet2[i]
        vet1[i] = vet1[i] - vet2[i]
        
    }
    console.log(vet1, vet2)
}
vet1 = [1,2,3,4,5]
vet2 = [5,4,3,2,1]
trocaDeValores(vet1, vet2)