function gerarNumeros(min, max, tempo = 2000 ){
    if (min > max){
        [max, min] = [min, max]
    }

    return new Promise ((resolve) =>{
        setTimeout(function(){
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
        }, tempo)
    })
}

function gerarDiversos(){
    return Promise.all([
        gerarNumeros(1, 60, 1000),
        gerarNumeros(1, 60, 500),
        gerarNumeros(1, 60, 4000),
        gerarNumeros(1, 60),
        gerarNumeros(1, 60, 6000),
        gerarNumeros(1, 60, 300)
    ])
}


gerarDiversos()
    .then(console.log)