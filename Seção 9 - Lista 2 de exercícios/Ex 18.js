//Receber um array de produtos e somar o preço total deles

produtos1 = [
    {nome: 'Jornal', categoria: 'Informação', preço: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preço: 150},
]

function despesasTotais (arraial){
    let preçoTotal = 0
    arraial.forEach(element => {
        preçoTotal += element.preço
    });
    return preçoTotal
}

console.log(despesasTotais(produtos1))