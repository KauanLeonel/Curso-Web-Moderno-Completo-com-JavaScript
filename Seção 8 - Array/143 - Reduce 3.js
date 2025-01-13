//Própro reduce

Array.prototype.reduce2= function(callback, valorIncial){
    const indiceInicial = valorIncial ? 0: 1    
    let acumulador = valorIncial || this [0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i])
    }
    return acumulador
}

const soma = (total, valor) => total+valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma, 21)) 


/*Explicação do chat sobre a função callback 
No contexto do reduce2, o callback é uma função que você fornece ao método reduce2 para realizar a 
operação desejada em cada iteração do array. Em outras palavras, o callback é a lógica que você quer 
aplicar ao valor acumulado e ao valor atual de cada elemento do array.

 */