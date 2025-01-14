//Criar uma função que receba um obj e retone um NOVO objeto com as chaves e valores invertidos

function inversão(normal){
    let invertido = {}
    for (let chave in normal){
        let temp = normal[chave]
        invertido[temp] = chave
    }
    return invertido
}

console.log(inversão({a: 1, b:2, c:3}))