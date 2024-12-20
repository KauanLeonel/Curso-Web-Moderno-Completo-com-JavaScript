function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log (soma())
console.log (soma(3.3 ,2.3, 5.3, 3.3))
console.log (soma('a', 'b', 'c'))