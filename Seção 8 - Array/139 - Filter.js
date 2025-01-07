//Formas de filtrar o array

const produtos = [
    {nome: 'Notebook', preco:3000, fragil:true},
    {nome: 'Ipad', preco: 1500, fragil: true},
    {nome: 'Copo de vidro', preco: 10, fragil: true},
    {nome: 'Copo de plástico', preço: 0.1, fragil: false}
]

console.log(produtos.filter(function(p){ //P será cada elemento passado nessa função callback
    //Filter terá um valor <= ao array original
    return p.preco >1000 && p.fragil ==true // Aqui é o parâmetro de retorno
})) 

const caro = produtos => produtos.preco >= 500
const fragil = produtos =>produtos.fragil

console.log(produtos.filter(caro).filter(fragil))