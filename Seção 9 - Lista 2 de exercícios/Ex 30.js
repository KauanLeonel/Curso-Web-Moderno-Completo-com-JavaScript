//Recebe um obj com estudantes e suas notas em um array. Deve retornar um objeto com o atributo nome e média do melhor aluno

function melhorMedia(alunos){
    melhorAluno = {nome: '', nota: 0}
    for(let element in alunos){
        let notas = alunos[element]
        let soma = notas.reduce((acumulador, atual) => acumulador + atual)
        let media = soma/notas.length
        if (media > melhorAluno.nota){
            melhorAluno = {nome : element, nota: media}
        }
        
    }
    return melhorAluno
}

alunos= {
    joão : [1,2,3,4,5],
    Kauan : [100],
    maria: [3,4,5,6,7]
}

console.log(melhorMedia(alunos))