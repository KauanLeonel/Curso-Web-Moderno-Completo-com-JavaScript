const notas = [0, 4, 2 ,6 , 34, 64, 24, 6]

//sem callback

let notasBaixas = []

for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
        }
}

console.log(notasBaixas)

// com callback

notasBaixas = notas.filter(function (nota) { // filter só recebe valores booleanos
    return nota < 7
})

console.log(notasBaixas)

// com arrow

notasBaixas = notas.filter(nota =>  nota < 7)

console.log(notasBaixas)