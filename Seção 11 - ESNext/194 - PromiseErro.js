function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')//Reject para erro
            } else{
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}


funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        valor => console.log('Valor', valor),
        err => console.log('Err esp:', err)
    ) 
    .catch(err => console.log(`Err: ${err}`)) //para ver o erro e não bugar o node, se colocar ele, não será mais passado dados para o próximo then