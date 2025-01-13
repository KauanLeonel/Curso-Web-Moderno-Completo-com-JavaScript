/*Crie uma função que receba um array, pegue o primeiro elemento dele e o último. Por fim retorne um novo array com esse dois
valores */

function ultimoPrimeiro (arraial){
    arrayl = [] 
    arrayl.unshift(arraial[0])
    arrayl.push(arraial[arraial.length - 1])
    return arrayl
}

console.log(ultimoPrimeiro([2,3,4,5,9]))