const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) { //A promise precisa estar dentro de uma função para que ela não ative logo que inicie o código
    //E caso queira passar algum parâmetro
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {
            if (err) reject('Erro ao ler o arquivo: ' + err)
            else resolve(conteudo.toString())
        })
    })
}

console.log('Inicio...')
lerArquivo(caminho)
    .then(console.log)
    .then(err => console.log(err))
console.log('Fim')