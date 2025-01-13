/*É preciso desenvolver uma função que recebe um objeto e retorne um array de arrays para cada elemento do objeto. */

function transformarEmArray (obj){
    return Object.entries(obj) 
    /*Explcação do chat
    O método Object.entries(obj) retorna um array de arrays, onde cada subarray contém:
A chave como o primeiro elemento.
O valor associado à chave como o segundo elemento. 
 */
}
function objetoParaArray(objeto) { //Usando método chave, objeto
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }

const teste = {
    nome: 'Maria',
    profissão: 'Desenvolvedora'
}

console.log(transformarEmArray(teste))