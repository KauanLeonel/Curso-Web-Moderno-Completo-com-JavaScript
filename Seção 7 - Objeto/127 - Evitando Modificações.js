//Object.preventExtensions: proíbi a adição de parâmetros de um obj

 const produto = Object.preventExtensions({
    nome: "M & Ms",
    preço: 1.99,
    tag: "Promoção"
 })

 console.log('Extensível: ', Object.isExtensible(produto)) //Vê se obj foi criado sem o preventExtensions
 produto.nome = "Borracha"
 produto.descrição = "Borracha escolar da cor branca"
 delete produto.tag
 console.log(produto)

 //Object.seal
 const pessoa = {nome: "Juliana", idade: 35}
 Object.seal(pessoa) // Seal serve para selar o obj, ou seja, os valores podem ser modificados, mas seu tamanho e parâmetros não
 delete pessoa.idade
 pessoa.sobrenome = "Silva"
 pessoa.idade = 31
 console.log('Selado: ', Object.isSealed(pessoa)) //Confere se ele está selado
 console.log(pessoa)

 //Object.freeze: ele congela tudo