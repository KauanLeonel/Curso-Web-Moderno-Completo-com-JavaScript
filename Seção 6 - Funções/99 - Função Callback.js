const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice){
    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach é uma funçaõ de array que ele percorre para cada elemento, passando o elemento e o índice
fabricantes.forEach(function(a){
   console.log (a) 
})