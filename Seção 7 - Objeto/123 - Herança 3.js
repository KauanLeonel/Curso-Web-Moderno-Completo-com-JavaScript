const pai = {
    nome: "Pedro",
    corDosCabelos: "Azul"
}

const filha1 = Object.create(pai) // Ele já cria o objeto filha com "pai sendo o pai"
filha1.nome = "Maria"

console.log (filha1.corDosCabelos)

const filha2 = Object.create(pai,{
    nome: {value:"Bia", writable: false, enumerable: true}    
})

console.log(filha2.nome)
filha2.nome = "Bianca"
console.log(`${filha2.nome} tem cabelos ${filha2.corDosCabelos}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let keys in filha2){
    filha2.hasOwnProperty(keys)? //Ternário onde se a propriedade for da filha (hasOwnProperty) ele vai dizer que é dela
    console.log(keys) : console.log(`Por herança: ${keys}`)
}