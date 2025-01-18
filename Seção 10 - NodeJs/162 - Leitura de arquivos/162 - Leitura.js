const fs = require('fs') // Módulo pré- instalado no node

const caminho = __dirname + '/162 - Arquivo.json' //Caminho

//Sincrono (se for pesado ele vai demorar pra carregar)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrona (Só vai fazer no final)
fs.readFile(caminho, "utf-8", (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})


const config = require('./162 - Arquivo.json')
console.log(config.db)

//Leitura de pasta

fs.readdir(__dirname, (err, arquivos) => { //__dirname é um constânte do node que é o caminho atual
    console.log("Conteudo da pasat")
    console.log(arquivos)
})