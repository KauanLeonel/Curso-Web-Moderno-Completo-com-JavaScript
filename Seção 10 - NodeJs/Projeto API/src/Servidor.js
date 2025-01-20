const porta = 3003;

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const banco = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) //Para qualquer requisição ele irá passar por essa linha, transformando-o em obj pela biblioteca body-parser
/*app.get('/produtos', (req, res, next) => {
    console.log("MiddleWare 1...") //Para exemplificar o middle
    next()    


    app.use('/produtos', (req, res, next) => { //Vai mandar para todas as urls
        res.send({nome: 'Notebook', preço: 1230.45}) //Converter para JSON
})
})*/

//GET PEGA ALGO DO SERVIDOR

app.get('/produtos', (req, res, next) => {
        res.send(banco.getProdutos()) //Converter para JSON
})

app.get('/produtos/:id', (req, res, next) =>{
        res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{ //Enviar a requisição 
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) //Enviando o que foi escrito. Ele volta em JSONre
})

app.put('/produtos/:id', (req, res, next)=>{ //Alterar a requisição por meio do ID 
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) //Enviando o que foi escrito. Ele volta em JSONre
})

app.delete('/produtos', (req, res, next)=>{ //Enviar a requisição 
    const produto = banco.excluirProduto(req.params.id)
    res.send(produto) //Enviando o que foi escrito. Ele volta em JSONre
})

app.listen(porta, () =>{
    console.log('Servidor executando a porta:', porta)
})