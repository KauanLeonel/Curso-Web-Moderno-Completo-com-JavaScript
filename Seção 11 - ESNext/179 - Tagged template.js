// Tagged template serve para processar uma template string em uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Kauan'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}.`) //Ele vai retornar dois arrays, um com os valores e outro que é tudo que está na string sem ser os valores
