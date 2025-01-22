function gerarNumeros(min, max ){
    if (min > max){
        [max, min] = [min, max]
    }

    return new Promise ((resolve) =>{
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumeros(10, 30)
    .then(num => num *10)
    .then(num =>console.log(`O número gerado foi ${num}`))