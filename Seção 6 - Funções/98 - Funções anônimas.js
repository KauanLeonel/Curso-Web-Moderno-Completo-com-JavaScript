const soma = function (x, y){
    return x+y
}

const imprimirResultado = function (a, b, operação = soma){
    console.log(operação(a,b))
}

imprimirResultado(5,3)
imprimirResultado(3,2, function(x, y){
    return x-y;
})
imprimirResultado (2,6, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log("Eae")
    }
}

pessoa.falar()