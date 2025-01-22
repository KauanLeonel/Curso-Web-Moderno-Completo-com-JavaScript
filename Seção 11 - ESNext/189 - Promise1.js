//A promessa devolve UM único dado no futuro
let p = new Promise(function(resolve){
    resolve(['Kauan', 'Edson', 'Leonel', 'Lira'])
}) 

//o then também recebe uma função como parâmetro
//Com function
p.then(function(valor){
    console.log(valor)
})

//Com arrow
p.then((valor) => console.log(valor))   

function primeiroElemento(array){
    return array[0]
}

p
    .then(primeiroElemento) //Dá para fazer por funções separadas ou funções anônimas
    .then(primeiroElemento) //O primeiro se torna o resultado do primeiro then. Ainda dá pra reutilizar a função
    .then(letra => letra.toLowerCase())
    .then(console.log) //Como o log é uma função e o then só recebe uma var, acaba que é possível só chamar o console.log

// DIRETO

    let p2 = new Promise(function(resolve){ //Dá pra fazer direto na promesa
        resolve(['Kauan', 'Edson', 'Leonel', 'Lira'])
    }) 
    .then(primeiroElemento) 
    .then(primeiroElemento) 
    .then(letra => letra.toLowerCase())
    .then(console.log) 