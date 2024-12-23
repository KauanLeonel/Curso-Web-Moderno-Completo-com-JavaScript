//Diferença entre o Call & Apply é a forma de passar parâmetros
function getPreço (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preço * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preço: 5500,
    desconto: 0.50,
    getPreço
}
global.preço = 20;
global.desconto = .1;
console.log(getPreço()) // Assim ele usa os atribuitos globais declarados nas linhas de cima

console.log(produto.getPreço()) // Definindo como sendo do objeto, ele usar os atributos do mesmo
// Mas para isso é necessário a função estar dentro do objeto

const carro = {
    preço: 5000,
    desconto: 0.1
}

// Método call
console.log(getPreço.call(carro)) // Na função call é necessário digitar ".call" após a função e passar o obj como parâmetro
console.log(getPreço.call(carro, 0.2, '$')) // É possível passar os parâmetros também, sendo o primeiro o objeto/contexto
// Método Apply
console.log(getPreço.apply(carro)) // Na função call é necessário digitar ".apply" após a função e passar o obj como parâmetro
console.log(getPreço.apply(global, [0.2, '$']))// Mesma coisa que o call, única diferença é que no apply ele passa um array após o parâmetroS
//Usamos o global em cima pq o carro já estava declarado, aí ele pegou o do global.preço