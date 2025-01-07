//Filter por baixo dos panos
Array.prototype.filter2 =function(callback){
    const newArray = []
    for (let i = 0; i < this.length;i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco:3000, fragil:true},
    {nome: 'Ipad', preco: 1500, fragil: true},
    {nome: 'Copo de vidro', preco: 10, fragil: true},
    {nome: 'Copo de plástico', preço: 0.1, fragil: false}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos =>produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))