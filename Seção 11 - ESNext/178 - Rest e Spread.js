//Ele pode ser usado como rest para juntar ou spread para espalhar

//Usar spread com obj

const funcionario = {nome: "Maria", salario: 1500}
const clone = {ativo: true, ...funcionario} //Vai passar todos os parâmetros de funcionário para clone
console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoB = ['Georje', ...grupoA, 'Rafaela']

console.log(grupoB)