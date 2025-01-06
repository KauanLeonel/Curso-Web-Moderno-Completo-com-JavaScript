const cantores = ['Michael', 'Kurt', 'Freddy', 'Elton']
cantores.pop() //Remove o último elemento
console.log(cantores)

cantores.push('Alicia')
console.log(cantores)

cantores.shift() //Remove o primeiro elemento
console.log(cantores)

cantores.unshift('Bruno Mars')
console.log(cantores)

//Splice pode adicionar e remover elementos

//Adicionar
cantores.splice(2, 0, 'Billy Joel', 'Jão')
//Excluir
cantores.splice(4,1) 
console.log(cantores)

const algunsCantores = cantores.slice(2) //Cria um novo arrays a partir da posição indicada
console.log(cantores, algunsCantores)

const outrosCantores = cantores.slice(1, 4)
console.log(outrosCantores)