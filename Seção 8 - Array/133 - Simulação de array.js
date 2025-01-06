//Simulando o array a partir do objeto
const quaseArray = {
    0: 'Rafael', 
    1: 'Kauan',
    2: 'Leonel'
}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Led', 'Queen', 'Nirvana']
console.log(quaseArray.toString(), meuArray)