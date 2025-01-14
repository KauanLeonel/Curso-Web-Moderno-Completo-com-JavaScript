//Fazer uma função que recebe um array e retorna todos os números pares que estão em indices pares

function indiceParidade(arraial){
    const newArray = []
    arraial.forEach((element, indice) => {
        if (indice % 2 == 0){
            if(element % 2 ==0)
            newArray.push(element)
        }
    })
    return newArray
}

teste = [1,2,3,4]
teste1 = [10,30, 22, 534]
console.log(indiceParidade(teste))
console.log(indiceParidade(teste1))