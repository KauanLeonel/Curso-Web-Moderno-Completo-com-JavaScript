//COnjuntado não indexado(não tem indice) que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Grêmio').add("Palmeiras")
times.add('Vasco')

console.log(times)
console.log(times.size)
times.delete('Grêmio')
console.log(times.has('Grêmio'))

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)