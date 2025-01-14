//Criar uma função que receba um array e retorne a média dele

const media = arraial => {
    const soma = arraial.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
})
    return soma/arraial.length
}


teste = [10, 0]

console.log(media(teste))