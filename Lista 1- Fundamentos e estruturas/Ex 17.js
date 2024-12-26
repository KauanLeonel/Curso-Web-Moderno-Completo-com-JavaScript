/*Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano Aumento 
A 10% 
B 15% 
C 20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const mudançaSalarial = function(plano, sal = 1500){
    let NovoSal = sal
    switch (plano){
        case "A":
            NovoSal += NovoSal * 0.1
            break;
        case "B":
            NovoSal += NovoSal * 0.15
            break;   
        case "C":
            NovoSal += NovoSal * 0.2
            break;
        default:
            return 'ERROR'
    }
    return NovoSal
}

console.log(mudançaSalarial('B', 1000))
console.log(mudançaSalarial('C', 1000))
console.log(mudançaSalarial('A'))
console.log(mudançaSalarial('BD', 1000))