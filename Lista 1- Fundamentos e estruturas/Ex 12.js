// Faça um algoritmo que calcule o fatorial de um número. 

const pot = (num) =>{
    let fat = num - 1;
    let res = num;
    while (fat > 0){
        res = res * fat
        fat--
    }
    return res
}

console.log(pot(5))