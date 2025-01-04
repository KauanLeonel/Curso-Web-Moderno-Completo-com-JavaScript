// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0= "Z" //Não recomendável 
const avo = {
    atributo1: "A"
}
const pai={
    __proto__: avo, // agora o pai tem herança do avô
    atributo2: "B",
    atributo3: '3'
}
const filho={
    __proto__: pai, // agora o pai tem herança do avô
    atributo3: "C"
}

console.log(filho.atributo1) //Ele pegou o atributo1 do avô, primeiro ele procurou no pai
console.log(filho.atributo0,"\n") // Ele procurou nos seus ascendentes até o prototype (que é o definido por padrão), onde foi encontrado
console.log(filho.atributo3) //Ele pegou o primeiro que encontrou

const carro ={
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <=this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const Ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const Volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // O super serve para ao invés dele chamar o status do volvo de novo, ele chame o status do OBJ carro
    }
}
Object.setPrototypeOf(Ferrari, carro) //Definindo o parentesco (Filho, pai)
Object.setPrototypeOf(Volvo, carro)

console.log(Ferrari, Volvo)

Volvo.acelerarMais(1000)
console.log(Volvo.status())

Ferrari.acelerarMais(100)
console.log(Ferrari.status())