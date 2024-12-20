let dobro = function(a){
    return a *2
}

console.log(dobro(3))

dobro = (a) => {
    return a*2
}

dobro = a => a*2

console.log(dobro(4))

let ola = function(){
    return "Olá"
}
console.log(ola())

ola = () => "olá"
ola = _ => "olá" // recebe parâmetro

console.log(ola())