// Transformar o array em outra coisa

const alunos = [
    {nome: 'Adolfo', nota: 3, bolsista: false},
    {nome: 'Bruno', nota: 4.7, bolsista: true},
    {nome: 'Cristian', nota: 6.5, bolsista: false},
    {nome: 'Douglas', nota: 9, bolsista: true},
    {nome: 'Esther', nota: 6, bolsista: true},

]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual //Aqui ele tá somando todos os valores do array, um por um, ou seja r = r + i
}, 10) //Esse dez indica o valor inicial (r) que ele deve começar, não é obrigatório

console.log(resultado)