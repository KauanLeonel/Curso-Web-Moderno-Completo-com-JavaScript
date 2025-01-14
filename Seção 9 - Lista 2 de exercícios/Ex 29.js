//Criar uma função que retorne o segundo maior número de um array

function segundoMaior(nums){
    maior = nums[0]
    segundo = 0
    nums.forEach(element => {
        if(element > maior){
            segundo = maior
            maior = element
        }
    });
    return segundo
}

console.log(segundoMaior([1,2,3,4,5,6,7]))