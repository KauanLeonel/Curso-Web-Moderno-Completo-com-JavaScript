const ModuloA = require('../../../150 - Sistema de Módulos/150 - Módulo A') //Acessando o Módulo A da aula 150
console.log(ModuloA.ola)

const c = require('../../Pasta C') //Caso você não defina o arquivo, ele irá pegar o escrito 'index'
console.log(c.ola2)

/*const http = require('http') // Também é possível requerir módulos do próprio Node
http.createServer((res, req) =>{ //Serve para criar um Bom dia na porta http:8080
    res.write('Bom Dia')
    res.end()
}).listen(8080)*/

