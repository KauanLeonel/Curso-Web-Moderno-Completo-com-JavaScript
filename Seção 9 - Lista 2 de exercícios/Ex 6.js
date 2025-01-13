//Fazer uma função que receba um valor booleano/numérico e retornar o inverso

function inverso(valor) {
    if(typeof valor == 'boolean'){
        return !valor
    } else{
        if(typeof valor == 'number'){
            return -valor //Se colocar '-' na frente ele retorna o valor negativo
        } else return `Valor esperado: boolean or number, not ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso(1))
console.log(inverso(-11))
console.log(inverso('Kauan'))