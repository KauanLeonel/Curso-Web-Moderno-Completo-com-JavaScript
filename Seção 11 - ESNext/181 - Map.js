const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angualr', {framework: true})

console.log(tecnologias.react) //Não irá pegar
console.log(tecnologias.get('React')) //jeito correto

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((v1, ch) =>{
    console.log(ch, v1)
})

console.log(chavesVariadas.has(123)) //Se o elemento está presente
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)