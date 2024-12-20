//Armazenar função em um array

const array = [function (a, b) {return a+b}]

console.log (array[0](2, 4))

//Armazenar em um obj

const obj = {}

obj.falar = function() {return "OPA"}

console.log (obj.falar())

// Passar função como parâmetro

function run (fun){
    fun()
}

run(function(){console.log ("Funcionou")})

//Função retornando função

function soma(a, b){
    return function(c){
        console.log (a + b + c)
    }
}

soma (2,3)(4)

const cincoMore = soma(2,3)
cincoMore(2)