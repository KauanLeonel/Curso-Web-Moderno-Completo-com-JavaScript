// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca de produto'] = 'Generica'
produto.preço = 2020

console.log(produto)

delete produto.preço
delete produto['marca de produto']

console.log(produto)

const carro = {
    modelo : 'A4',
    valor : 90000,
    proprietario: {
        nome: 'Raul',
        idade: 45,
        endereço: {
            rua: 3,
            bairo: "Capital Inicial",
            Cidade: 'Ubatuba'
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'Lilly',
        idade: 30
    }],
    calcularValorSeguro : function(){
        //...
    }
}

console.log(carro)
carro.proprietario.endereço.rua = 100
carro['proprietario']['idade'] = 43 // Quando os atribuitos estiverem em strings
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)