//O map serve para gerar um novo array passando algum parâmetro, tipo gerar um array2 que é o dobro do 1, eles sempre terão o msm tamanho
//Um for com propóstio
const nums = [1,2,3,4,5,6]

 let resultado = nums.map(function(e){ //Colocando uma função no map cujo retorna o dobro, ele usa uma função callback
    return e*2
 })

 console.log(resultado)

 const somar10 = e => e +10 
 const triplo = e => e*3
 const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')} `
 let resultado2 = nums.map(somar10)
 console.log(resultado2)
 let resultado3 = nums.map(triplo)
 console.log(resultado3)
 let resultado4 = nums.map(paraDinheiro)
 console.log(resultado4)

 console.log(resultado5 = nums.map(somar10).map(triplo).map(paraDinheiro))