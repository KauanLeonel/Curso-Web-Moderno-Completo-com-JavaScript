//Escrever uma função que recebe uma string e conte quantas palavras há nela

//Minha versão (forma mais simples)
function mots(str){
    let palavras = 1
    for(let i = 0; i < str.length; i++){
        if (str[i] == ' ') palavras++
    }
    return palavras
}

palavra = 'Kauan Edson Leonel Lira'

console.log(mots(palavra))

//Usando o split

function words(str){
    return str.split(' ').filter(palavra => palavra !== ' ').length;
}
//O split vai quebrar a string em quatro partes
//O filter vai verificar se há algum elemento vazio, se houver vai tirá-lo
//Por fim ele retorna apenas o tamanho do array, que é a quantidade de palavras
console.log(words(palavra))