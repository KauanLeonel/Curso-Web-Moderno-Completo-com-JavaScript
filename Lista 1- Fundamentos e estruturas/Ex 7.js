/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”. */
let bhask = function(a = 0, b = 0, c= 0){
    const delta = (b*b) - (4*a*c)
    if (delta < 0) {
        return `Delta é negativo`
    } 
    resultados= [];
    const vet = (-b - Math.sqrt(delta))/(2*a);
    const vet2 = (-b + Math.sqrt(delta))/(2*a);
    resultados.push(vet)
    resultados.push(vet2)
    return resultados


}

console.log(bhask(3,-5,12))
console.log(bhask(1, 3, 2))
console.log(bhask(3, 1, 2))
