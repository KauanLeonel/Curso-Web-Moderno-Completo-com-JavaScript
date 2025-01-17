require('./157 - Global')

console.log(MeuApp.saudacao())

MeuApp.nome = 'Eita' //Dá pra mudar o escopo global
console.log(MeuApp.nome)