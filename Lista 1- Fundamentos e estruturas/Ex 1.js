/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

const calc = function (n1, n2){
    soma = n1 + n2;
    subtração = n1 - n2;
    multiplicação = n1 * n2;
    divisão = n1/n2;
    console.log (soma);
    console.log (subtração);
    console.log (multiplicação);
    console.log (divisão);
}

calc(1,2)