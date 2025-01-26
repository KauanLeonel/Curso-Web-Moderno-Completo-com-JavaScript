//Await só é válido em funções async. ELe serve para o código retonar tudo de uma vez
function esperarPor(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve()
        }, tempo)
    })
}

function retonarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor =await retonarValor()

    for(valor; valor < 14; valor++){
    await esperarPor(1500)
    console.log('Async and await', valor+0) 
    }
    return valor
}   

async function executarDeVerdade() {
    const v = await executar()
    console.log(v)
}

executarDeVerdade()