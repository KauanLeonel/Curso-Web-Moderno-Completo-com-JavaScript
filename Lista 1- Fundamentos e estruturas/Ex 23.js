/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

let n1 = 7, n2 = 5, n3 = 6;

function media(n1,n2,n3){
    let maior = n1, media = n2, media2 = n3
    if (n2 > n1 && n2 > n3){
        maior = n2
        media = n1
    } else{
        if(n3 > n1 && n3 > n2){
            maior = n3
            media2 = n1
        }
    }
    mediaFinal = ((maior*4) + (media*3) + (media2 *3))/10
    return mediaFinal
}
console.log(`Nota 1: ${n1}; Nota 2: ${n2};Nota 3: ${n3}; A media final é: ${media(n1,n2,n3)}`)
