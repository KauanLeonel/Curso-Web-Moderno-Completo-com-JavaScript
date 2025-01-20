//Const é constante, let é uma variável que fica no escopo e var é uma variável

{
    var a = 2
    let b = 4
    console.log(b)
}
console.log(a)

//Template string

const produto = "Ipad"
console.log(`${produto} é caro`)

//destructuring

const [l, e, ...tras] = "cod3r"
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x, y)

const {idade: i, nome} = {nome:'Anastor', idade: 99}

console.log(i, nome)