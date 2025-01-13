//Concat serve para concatenar vários arrays em um 

const filhos = [
    'Jake',
    'Finn'
]
const filhas = [
    'Jujuba',
    'Marceline'
]

const todos = filhas.concat(filhos, 'Adição')
console.log(todos, filhas, filhos)

console.log([-1,0].concat([1,2], [3,4], 5, [[6,7]]))