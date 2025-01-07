const alunos = [
    {nome: 'Adolfo', nota: 3, bolsista: false},
    {nome: 'Bruno', nota: 4.7, bolsista: true},
    {nome: 'Cristian', nota: 6.5, bolsista: false},
    {nome: 'Douglas', nota: 9, bolsista: true},
    {nome: 'Esther', nota: 6, bolsista: true},

]

//Desafio 1: Todos os alunos são bolsistas?

const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))

//Desafio 2: Algum aluno é bolsista?
const Bolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(Bolsistas))