//Promise, é uma promessa

function falarDepois(segundos, frase){
    return new Promise((resolve, reject) =>{ //Resolve = promessa foi resolvida, reject = promessa rejeitada
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepois(3, 'Kauan está estudando muito')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))

/*Há uma função chamada falarDepois que recebe o tempo para a executação do código e a frase a ser escrita. Ela irá retornar uma 
promessa com resolve e reject que quando o tempo passado acabar ela irá ler a frase. Mas como ela lê a frase?
Pelo then, uma propriedade da promessa. Pode não parecer, mas o then está junto da função na linha 12, nela a frase irá receber o
"?!?" e depois irá mostrar a frase*/

//Com reject

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{ //Resolve = promessa foi resolvida, reject = promessa rejeitada
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'ERRO')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e)) //Para tratar o erro, se não ele manda o erro