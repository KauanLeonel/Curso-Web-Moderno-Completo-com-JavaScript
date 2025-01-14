//Escrever uma função que receba uma palavra e uma array. Ela deve retornas as palavras do array que possuem a mesma palavra do primeiro parâmetro

function semelhantes(palavra, conjunto){
    let resultado = []
    conjunto.forEach(element => {
        if(element.includes(palavra)) //O método includes em JavaScript é usado para verificar se um valor específico está presente 
        // em um array ou string. Ele retorna true se o valor for encontrado e false caso contrário.
            resultado.push(element)
    });
    return resultado
}

console.log(semelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(semelhantes('Ka', ['programação', 'mobile', 'profissional']))