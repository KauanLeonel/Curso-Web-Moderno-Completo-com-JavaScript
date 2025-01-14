// Criar uma função que receba um array e retorne o menor número do array

teste = [65,4,57,-23, 2,6,2,-1,5]

function descobrirMenor (arraial){
    const menor = arraial.reduce((acumulador = arraial[0], atual) =>{
        if(acumulador > atual)
            return atual;
        else return acumulador;
    })
    return menor
} 

console.log(descobrirMenor(teste))