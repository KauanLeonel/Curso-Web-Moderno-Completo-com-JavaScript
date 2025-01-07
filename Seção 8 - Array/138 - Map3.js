Array.prototype.map2= function(callback){ //Atribui um novo parâmetro possíveis a todos os arrays devido ao prototype
    const newArray = [] //Cria um novo array
    for (i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this)) //Adiciona a esse array os itens
    }
    return newArray //Retorna o array
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.9 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

const paraObjeto = json => JSON.parse(json) //Transforma o JSON em um array de quatro objetos
const apenasPreco = produto => produto.preco //Aqui ele seleciona o preço de cada objeto


const resul = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resul)