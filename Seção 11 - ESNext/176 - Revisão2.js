//Arrow function

const soma = (a,b) => a+b
console.log(soma(2,4))

//arrow function (this)
const lexico1 = () => console.log(this === exports) //Só dá verdadeiro pq a função é arrow function
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parâmetro default

function log(texto = 'Node'){
    console.log(texto)
}

log()
log("Kauan")

//Operador Rest/Spred

function total(...nums){
    let total = 0
    nums.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))