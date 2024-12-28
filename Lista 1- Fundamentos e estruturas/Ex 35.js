/* Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

vetPilha =[1, 2, 3, 4, 5] 
vetAdiciona = [6, 7, 8, 9, 10]

function adicionar (vet1, vet2){
    for (let i = 0; i < vet2.length; i++){
        vet1 = vet1.concat(vet2[i])
    }
    return vet1
}

console.log(adicionar(vetPilha, vetAdiciona))