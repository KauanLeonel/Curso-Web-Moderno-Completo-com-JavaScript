/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

let  contagem = function(num){
    let n100, n50, n10, n5, n1;
    let obj = []
    n100 = num / 100
    num = num % 100
    n50 = num / 50
    num = num % 50
    n10 = num / 10
    num = num % 10
    n5 = num / 5
    num = num % 5
    n1 = num / 1
    num = num % 1
    if (Math.trunc(n100) > 0) obj.push(`Notas de 100: ${Math.trunc(n100)}`)
    if (Math.trunc(n50) > 0) obj.push(`Notas de 50: ${Math.trunc(n50)}`)
    if (Math.trunc(n10) > 0) obj.push(`Notas de 10: ${Math.trunc(n10)}`)
    if (Math.trunc(n5) > 0) obj.push(`Notas de 5: ${Math.trunc(n5)}`)
    if (Math.trunc(n1) > 0) obj.push(`Notas de 1: ${Math.trunc(n1)}`)
    return obj
}
console.log(contagem(100))
console.log(contagem(157))