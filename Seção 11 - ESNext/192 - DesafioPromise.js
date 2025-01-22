const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
console.log('Fim')