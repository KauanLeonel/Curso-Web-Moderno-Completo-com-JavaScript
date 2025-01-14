//Criar uma função que receba uma string e uma letra, ela deve retornar a quantidade de letras na frase. Deve ser case-sensitive

function contar(letra, str){
    let contador = 0
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === letra) contador++ //charAt(i) resolve a parte do caseSensitive
    }
    return contador
}


console.log(contar('a', 'A sorte favorece os audazes'))
console.log(contar('C', 'C sorte favorece os audazes'))