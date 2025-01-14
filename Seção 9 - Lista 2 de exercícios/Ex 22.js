//Criar uma função que gere um número aleatório. Caso coincida com o número passado pelo usuário, escrever 'Parábens'

function aleatório(num){
    min = 1
    max = 10
    const numeroAleatório = Math.floor(Math.random() * (max - min + 1) + min)

    return (numeroAleatório ==num ? `Parábens, o seu número foi sorteado` : `Infelizmente o número sorteado foi ${numeroAleatório}`)
}

console.log(aleatório(1))