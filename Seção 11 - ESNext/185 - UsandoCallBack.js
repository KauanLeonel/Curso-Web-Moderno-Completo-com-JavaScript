//Pegando nome de alunos em 3 arquivos JSON usando a função callBack e sem promise

const http = require('http') //Próprio módulo do node para fazer requisições

const getTurma =(letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res =>{
        let resultado = ''
        res.on('data', dados =>{
            resultado += dados
        })
        res.on('end', () =>{
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma("A", alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes) 
        })
        
    })
    
})

//Isso se chama callback hell, fica complicado de ler e estranho, é mais fácil com o promise

