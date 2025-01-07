//Tentativa de fazer a função forEach

//Minha tentativa
function forixi(par){
    for(let i = 0; i < par.length; i++){
        console.log(i,')',par[i])
    }
}

nomes = ['Ana', 'Bruno', 'Carlos', 'Daniel']
forixi(nomes)

//Aula:
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this) //Primeiro valor é o parametro, segundo o indice e terceiro o array
    }
}
const array1 = [1,2,3,4,5,6]

array1.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})