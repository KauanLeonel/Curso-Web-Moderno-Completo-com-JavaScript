function gerarNumAleatorio (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let num = 0
while (num != 7){
    num = gerarNumAleatorio(-1, 10);
    console.log(`O numero gerado foi ${num}` );
}

console.log("Fim");