const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) // Ele pega todas as chaves
console.log(Object.values(pessoa)) // Pega os valores
console.log(Object.entries(pessoa)) //Ele cria um array com o objeto

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]} `)
})

Object.entries(pessoa).forEach(([Chave, valor]) =>{ // Usando parametros
    console.log(`${Chave}: ${valor} `)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    //Criar uma propriedade
    enumerable : true,
    writable: false,
    value: '02/02/2006'
})

pessoa.dataNascimento = 'Oi'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign
const dest = {a:1}
const o1 = {b : 2}
const o2 = {c : 3, a : 4}
const obj = Object.assign(dest, o1, o2) // Ele vai concatenar todos os objetos(a partir do segundo parâmetro) ao primeiro parâmetro
// Se tem dois atributos com o mesmo nome ele sobrescreve 

Object.freeze(obj) // Congela o obj