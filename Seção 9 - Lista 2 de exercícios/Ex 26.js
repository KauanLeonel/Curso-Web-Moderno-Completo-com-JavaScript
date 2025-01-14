//Criar uma função que receba uma string e retorn só as consoantes

function consoantes(str){
    let resultado = ''
    for(let i = 0; i < str.length; i++){
        if(!'aeiouAEIOU'.includes(str[i])){ //o include faz a seguinte pergunta: Esse frase possuí o caractere(str[i]), caso não possuir (por isso a exclamação), ele adiciona à nova string
            resultado += str[i]
        }
    }
    return resultado
}

console.log(consoantes('Kauan'))
console.log(consoantes('Os verdadeiros heróis são aqueles que buscam a salvação e não o olhar daqueles que de nada entendem'))
console.log(consoantes('Bohemian Rapsody'))
console.log(consoantes('AAAAAAAAA'))