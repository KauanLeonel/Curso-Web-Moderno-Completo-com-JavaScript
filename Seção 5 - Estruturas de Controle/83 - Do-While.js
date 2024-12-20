function gerarNumAleatorio (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let num;
do{
    num = gerarNumAleatorio(-1, 10);
    console.log(`O numero gerado foi ${num}` );
} while (num != 7);

console.log("Fim");