//A função forEach serve para percorrer um array
const array1 = [1,2,3,4,5,6]

array1.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})

array1.forEach(nome => console.log(nome))

const exibirAprovador = array1 => console.log(array1)
array1.forEach(exibirAprovador)