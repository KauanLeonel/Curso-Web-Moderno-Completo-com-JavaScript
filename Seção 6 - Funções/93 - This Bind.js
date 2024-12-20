const pessoa = {
    nome: "Kauan",
    falar (){
        console.log (this.nome)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()