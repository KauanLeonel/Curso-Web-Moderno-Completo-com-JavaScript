//Array é um obj, onde sua única diferença é que a identificação é pelo índice

console.log(typeof Array, typeof new Array, typeof [])

//Não é legal fazer um array heterogênio, vulgo, de vários tipos

let aprovados = new Array ('Ana', 'Bia', 'Carlos')

console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[4])

aprovados[3] = 'Daniel'
aprovados.push('Ether')
aprovados[9] = 'João'
console.log(aprovados, aprovados.length) 
aprovados.sort() //Ele ordena o array
console.log(aprovados)

delete aprovados [1] //Ele não vai reordenar o array, apenas vai excluir aquele espaço, deixando indefinido, um buraco
console.log(aprovados)
aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 2, 'Kauan', 'Leonel') //Ele modifica o array, exclui mais de um elemento, o primeiro num é a partir de qual elemento ele irá começar e oesgundo é quantos serão excluídos
//Ele também pode adicionar, basta colocar os novos elementos ao final. Aí ele adicionara a partir da primeira posição indicada
console.log(aprovados)
aprovados.splice(1, 0, 'Edson', 'Lira')
console.log(aprovados)
 
// Um array costante não significa que os dados dele sejam constantes