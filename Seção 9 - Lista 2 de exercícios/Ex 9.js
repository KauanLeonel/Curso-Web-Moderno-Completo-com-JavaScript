/*Criar uma função que recebe dois parâmetros, o primeiro será a mensagem e o segundo a quantidade de vezes que será repetida.
A função deve retornar um array */

let repetição = function(mensagem, quantidade){
    let arraial = []
    for (let i = 0; i < quantidade; i++){
        arraial.push(mensagem)
    }
    return arraial
}

console.log(repetição(1, 6))
console.log(repetição('Kauan', 10))