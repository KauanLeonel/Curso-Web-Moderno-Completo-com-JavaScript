/*Escrever uma função que receba um array e um número, ela deve retornar apenas os números que possuem a quantidade de dígitos
do segundo parâmetro */

function digitos(conjunto, num){
    let resultado = []
    conjunto.forEach((element) => {
        if(element.toString().length == num) resultado.push(element)
    });
    return resultado
}

console.log(digitos([1,53,634,12,5,53,6], 1))