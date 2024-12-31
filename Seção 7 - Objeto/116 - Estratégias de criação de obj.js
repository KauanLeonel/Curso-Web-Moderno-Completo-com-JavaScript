// Usando a notação literal

const obj1 = {

}

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto (nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)
 
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funçãõ factory (Factory é um padrão de projeto que fabrica alguma coisa)

function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase, 
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 1000, 2)
const f2 = criarFuncionario('João', 11040, 6)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log (filha)


// Uma função famosa que retorna um objeto transformando Jason em OBJ

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)