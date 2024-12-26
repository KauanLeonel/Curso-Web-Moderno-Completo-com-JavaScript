/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const num = 1
let tipo;
switch (num){
    case 1 :
    tipo = "Domingo. Final de Semana"
    break;
    case 2: 
    tipo = "Segunda: Dia útil"
    break;
    case 3: 
    tipo = "Terça: Dia útil"
    break;
    case 4: 
    tipo = "Quarta: Dia útil"
    break;
    case 5: 
    tipo = "Quinta: Dia útil"
    break;
    case 6: 
    tipo = "Sexta: Dia útil"
    break;
    case 7: 
    tipo = "Sábado: Final de semana"
    break;
    default:
        tipo = "Inválido"
}

console.log(tipo)