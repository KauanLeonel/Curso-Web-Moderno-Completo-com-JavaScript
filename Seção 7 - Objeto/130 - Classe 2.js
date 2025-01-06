// Criação de classes e herança entre elas

class avô{
    constructor(sobrenome){ //Função construtora
        this.sobrenome = sobrenome
    }
}

class pai extends avô{ //Para passar a herança, basta usar o extends seguido do parente
    constructor(sobrenome,profissão = 'Professor'){
        super(sobrenome) //O super serve para ele pegar a herança da superClasse(o parente), vulgo o sobrenome que veio do avô
        this.profissão = profissão
    }
}

class Filho extends pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
const avo = new avô
console.log(filho)
console.log(avo)