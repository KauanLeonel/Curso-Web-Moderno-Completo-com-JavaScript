class Pessoa {
    constructor(nome){
        this.nome = nome // O this é importante pq ele torna a var global, sem ele a var nome não teria sido declarada no falar()
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Kauan')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome não é ${nome}`)
    }
}

const p2 = pessoa('Kauan')
p2.falar()