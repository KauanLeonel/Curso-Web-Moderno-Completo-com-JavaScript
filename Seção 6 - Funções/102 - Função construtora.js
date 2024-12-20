function Carro (velocidadeMaximo = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaximo){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaximo
        }
    }
    // Método púnblico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar() //Como se tivesse acelerando
Ferrari.acelerar()
Ferrari.acelerar() 
console.log(Ferrari.getVelocidadeAtual())