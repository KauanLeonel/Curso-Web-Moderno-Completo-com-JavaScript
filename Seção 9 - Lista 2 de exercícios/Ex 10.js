/*Criar uma função que receba um número e escreva o símbolo "*" na quantidade passada */

let mais = num => {
    let str = ''
    for(let i = 0; i < num; i++){
        str += '+'
    }
    return str
}

console.log(mais(3))
console.log(mais(10))