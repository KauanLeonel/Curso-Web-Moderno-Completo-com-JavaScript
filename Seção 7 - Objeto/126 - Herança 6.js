function aula (nome, video){
    this.nome = nome
    this.video = video
}

const aula1 = new aula("Primeira aula", 1)
const aula2 = new aula("Segunda aula", 2)
console.log(aula1, aula2)

// Simulando a função "new" (por baixo dos panos)

function novo(f, ...params){
    const obj = {} // Recebe o filho
    obj.__proto__ = f.prototype // passa a herança
    f.apply(obj, params) //Aplica
    return obj //Retorna
}

const aula4 = novo(aula, "Aula 4", 4)
const aula5 = novo(aula, "Aula 5", 5)

console.log(aula4, aula5)