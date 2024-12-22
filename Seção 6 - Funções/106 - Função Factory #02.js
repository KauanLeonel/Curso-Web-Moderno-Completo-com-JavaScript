function criarProduto (nome, preço, desconto = 0.1){
    return {
        nome,
        preço,
        preçoFinal: preço - (preço * desconto)
    }
}

console.log(criarProduto('Notebook', 2000))
