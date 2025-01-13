const aluno = [
    {nome: "João", nota: 7.9},
    {nome: "Maria", nota: 4}
]

//Abordagem imperativa 
let total1 = 0;
for(let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota //Ele pega a nota de cada obj do array
}
total1 = total1 /aluno.length

console.log(total1)

//Abordagem declarativa 

const getNota = aluno => aluno.nota
const soma = (total, atual) => total+atual
total2 = aluno.map(getNota).reduce(soma) //O getNota pega só a nota dos alunos, enquanto a soma reduz todas as notas pegas em um só (a soma delas)
//A função reduce não está definindo um valor inicial, apenas a callback que é soma: reduce(soma(callback), valorinicial(nenhum))
total2 /= aluno.length
console.log(total2)

//Imperativo é o passo a passo, como é feito.
//Declarativa diz o que tem que ser feito