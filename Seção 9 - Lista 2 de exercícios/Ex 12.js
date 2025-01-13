//Criar uma função que recebe um objeto e um parâmetro do mesmo. Ela deve retornar um cópia do obj sem o segundo parâmetro

function removerPropriedade(obj, propriedade){
    // novoObj = obj /Se fizer isso ele ainda usará o mesmo local de memória do primeiro obj(Não é o objetivo)
    novoObj = Object.assign({}, obj) //Para não ocorrer o que foi descrito acima, é preciso criar um novo obj a partir do assign
    //Assign é uma nova propriedade, ela cria novos objs em outro espaço de memória
    delete novoObj[propriedade]
    return novoObj
}

obj1 = {a : 1, b: 2}
obj2 = {
    id : 20,
    nome: 'Caneta',
    descrição: 'Não preenchido'
    }

console.log(removerPropriedade(obj1, "a"))
console.log(obj1)

console.log(removerPropriedade(obj2, "descrição"))
console.log(obj2)