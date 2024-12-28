/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

vetorInteiro = [1,2,3,4]
vetorString = ["K", "A", "U", "N"]
vetorFloat = [0.1,0.2,0.3,0.4]

function concatenar(...args){
    resultado = []
    for (i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i]) // concat serve para concaterna o elemento selecionado, cujo são os argumentos mandados
        console.log(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorFloat, vetorString))
console.log(concatenar(vetorString))
console.log(concatenar(vetorInteiro,vetorFloat, vetorString))