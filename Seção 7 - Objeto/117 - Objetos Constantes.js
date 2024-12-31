const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Tentando mudar a const
//pessoa = {nome: 'Ana'}
Object.freeze(pessoa)

pessoa.nome = "Maria" //O Obj é inalterável
pessoa.endereço = "ABC"
delete pessoa.nome
console.log(pessoa)

const objConstante = Object.freeze({nome:   'João'})
console.log(objConstante)