/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

let notas = [10, 4, 5, 3]

function conceito(vetor){
    let conceitos =[]
    for (i in vetor){
        if (vetor[i] >= 9) conceitos.push("A")
        if (vetor[i] >= 7 && vetor[i] < 9) conceitos.push("B")
        if (vetor[i] >= 5 && vetor[i] < 7) conceitos.push("C")
        if (vetor[i] >= 0 && vetor[i] < 5) conceitos.push("D")
     } 
     console.log(vetor, conceitos)
}

conceito(notas)