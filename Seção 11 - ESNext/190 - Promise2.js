/*setTimeout(() => {
    console.log('Executando...')
    setTimeout(() => {
        console.log('Continuando...')
        setTimeout(() => {
            console.log('De novo...')
        }, 2000) 
    }, 2000)    
}, 2000);*/

//Meu jeito de resolver
let p = new Promise ((resolve) => {
    setTimeout(() =>{
        resolve('Kauan')
    },2000)
})

p   
    .then(fun => console.log(fun))

//Jeito da aula

function esperarPor(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log('executando')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(esperarPor(3000))
    .then(esperarPor(3000))