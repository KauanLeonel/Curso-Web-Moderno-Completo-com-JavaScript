/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function convenio(idade){
    normal = 100
    if (idade < 10) return normal + 80 
    if (idade >= 10 && idade <= 30) return normal + 50 
    if (idade > 30 && idade <= 60) return normal + 95 
    if (idade > 60) return normal + 130 

}

console.log (`Idade: 9; Valor do convênio: R$${convenio(9)}`)
console.log (`Idade: 10; Valor do convênio: R$${convenio(10)}`)
console.log (`Idade: 31; Valor do convênio: R$${convenio(31)}`)
console.log (`Idade: 45; Valor do convênio: R$${convenio(45)}`)
console.log (`Idade: 100; Valor do convênio: R$${convenio(100)}`)
