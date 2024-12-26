/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. */

let veri = (num) =>{
    if (num%3 == 0) return true;
    else return false;
}

console.log(veri(2))
console.log(veri(3))