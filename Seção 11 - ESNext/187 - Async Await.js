//O async/await é uma forma moderna e mais legível de lidar com operações assíncronas no JavaScript

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

//Recurso do ES8
//O objetivo é simplificar o uso de promises
//O await só vai funcionar em uma função que tiver o async
let obterAlunos = async() =>{
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA, tB, tC)
} //Retorna uma obj Async Function

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nome => console.log(nome))