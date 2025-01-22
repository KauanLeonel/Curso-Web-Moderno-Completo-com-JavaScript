//Pegando nome de alunos em 3 arquivos JSON com promise

const http = require('http')
const { json } = require('stream/consumers')

const getTurma =letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () =>{
                try { //Se deu certo
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

/*let nomes = []
getTurma("A").then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B").then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes) 
        })
        
    })
    
})*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //Concatenou as turmas
    .then(alunos => alunos.map(alunos =>alunos.nome))
    .then(x => console.log(x))

getTurma('D').catch(e => console.log(e.message)) //quando dá erro ele vai pra cá    