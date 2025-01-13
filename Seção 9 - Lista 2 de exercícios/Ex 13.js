//Criar uma função que receba um array e retorne outro array contendo apenas os números do array

function apenasNumeros (arraial){
    const newArray = [];
    arraial.forEach((nome) =>{
        if(typeof nome == 'number') {
            newArray.push(nome)
        } 
    })
    return newArray
}

teste = [1,'as', true, 3, 43, undefined, 6]

console.log(apenasNumeros(teste))
console.log(apenasNumeros(['a', 'b']))