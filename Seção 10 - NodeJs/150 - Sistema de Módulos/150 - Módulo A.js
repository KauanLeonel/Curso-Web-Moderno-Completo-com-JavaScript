/*Agora iremos trabalhar com o sistema de módulos no Node. Ele serve para facilitar a visualização do código e sua organização.
Esse sistema funciona semelhante a programação OO, onde cada módulo é privado em seu arquivo e para fazê-lo interagir com outros
módulos é necessário exportar ou importar eles. 
Obs: O Node funciona para o desenvolvimento backend, funcionado com V8 e o LIBUV, uma aplicação que capta as requisições e devolve ao 
receptor por meio de um event loop. Caso o arquivo seja muito pesado, esse event vai acabar parando para processá-lo. */

//Como exportar arquivos do Node

this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo evento'

/*Diferença entre eles:
Item	Contexto
this	Refere-se ao objeto do contexto do módulo, mas não é diretamente conectado a module.exports.
exports	Uma referência a module.exports no início do módulo. Permite adicionar propriedades ou métodos.
module.exports	O objeto real que será exportado. Pode ser reatribuído para exportar qualquer valor (objeto, função, etc.).

Recomendação:
Use module.exports quando precisar exportar algo que não seja um objeto ou quando for substituir completamente o objeto padrão.
Use exports quando quiser adicionar múltiplas propriedades ao objeto padrão.
Evite usar this para exportar, pois é mais propenso a causar confusão.*/