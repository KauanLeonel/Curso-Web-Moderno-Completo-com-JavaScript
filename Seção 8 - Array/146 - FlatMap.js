const escola = [
    {
    nome: 'Turma M1', //Turma 1
        alunos: [{
                nome: 'Gustavo',
                nota: 4
            },{
                nome: 'Ana',
                nota:7
            }]
}, {nome: 'Turma M2', //Turma 2
        alunos: [{
                nome: "Rebeca",
                nota: 9
            },{
                nome: 'Roberto',
                nota:10
            }

        ]

}]

console.log(escola[1].alunos[0].nota) //Pegando a nota da Rebeca

const getNotaDoAluno = aluno => aluno.nota //Pega a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //Pega o array onde o aluno está

const notas1 = escola.map(getNotasDaTurma) //Transforma notas em um único array
console.log(notas1)

Array.prototype.flatMap = function(callback){ //Só serve para concatenar os dois arrays
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)