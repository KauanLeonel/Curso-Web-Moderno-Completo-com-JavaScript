//Crie uma função que indique qual dos dois parâmetros passados é maior

const maior = (num1, num2) => {
    if (num1 > num2) {
        return (`${num1} é maior`)
    } else{
    if(num2 > num1) return (`${num2} é maior`)
     else{
        return ("Eles são iguais")
    }
}
}

console.log(maior(19, 1))

console.log(maior(19, 100))

console.log(maior(1, 1))
