/*Criar uma função que receba dois números inteiros maiores que -1 e retorne a multiplicação dele, porém
sem usar o "*" */

function multiplicação (num1, num2){
    let res = 0;
    for(let i = 0; i < num1; i++){
        res += num2
    }
    return res
}

console.log(multiplicação(9,10))