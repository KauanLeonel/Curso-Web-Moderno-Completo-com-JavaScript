console.log(typeof String, typeof Array, typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('') // o this ele pega o parâmetro que é uma string. O split separa a string em caracteres
    // o reverse inverte, enquanto o join junta
}

console.log("Kauan".reverse())


Array.prototype.first = function(){
    return this[0]
}

console.log([2,3,4,5,4].first())
console.log(['k','k', '3'].first())

// NÃO MEXER EM FUNÇÕES QUE JÁ EXISTEM 