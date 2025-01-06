class Lancamento { //Uma classe. Ela define métodos e parâmetros para objetos
    constructor(nome = generico, valor = 0 ){
        this.nome = nome
        this.valor = valor
    } 
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this. lancamentos = [] 
    }

    addLancamentos(...lancamentos){ //Uma função dentro da classe que adiciona ao array lançamentos tudo o que foi passado
        lancamentos.forEach(l => this.lancamentos.push(l))

    }
    sumario(){ //Aqui ele irá somar tudo o que foi passado usando uma estrututura de repetição forEach (para cada)
        let valorConsolido = 0
        this.lancamentos.forEach(l =>{
            valorConsolido += l.valor
        })
        return valorConsolido
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018) 
contas.addLancamentos(salario, contaDeLuz) //Aqui ele passa os dois objetos criados (salário e contaDeLuz)
console.log(contas.sumario()) //Mostra a soma do que foi passado