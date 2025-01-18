const fs = require ('fs')

const produto = {
    nome: 'Celular',
    preço: 1249.99,
    desconto: 0.14
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{ //Escrever um obj json
    //err é caso aconteça um erro
    console.log(err || 'Arquivo salvo') //Se não tiver err (err = 0 ) ele vai escrever arquivo salvo
})