//ES8: Object.value/Object.entries servem para passar chaves e valor

const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal

const nome = "Kauan"
const pessoa = {
    nome,
    ola(){
        return 'Olá'
    }
}

console.log(pessoa.ola())

//Class

class animal{}
class Cachorro extends animal{ //Ele tem herança em animal
    falar(){
        return "Rotwiler"
    }
}

console.log(new Cachorro().falar())