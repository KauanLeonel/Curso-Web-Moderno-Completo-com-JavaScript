const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.9 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

//Retornar um array apenas com os preços
/*
function transformarJson(jason){
    this.jason = JSON.parse(jason)
    for(let i = 0; i <this.jason.length; i++){
        console.log(jason.preco)
    }
}

transformarJson(carrinho)*/

const paraObjeto = json => JSON.parse(json) //Transforma o JSON em um array de quatro objetos
const apenasPreco = produto => produto.preco //Aqui ele seleciona o preço de cada objeto


const resul = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resul)