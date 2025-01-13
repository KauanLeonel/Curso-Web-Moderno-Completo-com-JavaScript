/*Faça um função que receba um número e retorn o mês*/


let mes = function(num) {
    switch(num){
        case 1:
        return 'Janeiro';
        case 2:
        return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        break;
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
         case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
        return "Número inválido"
        
}}

console.log(mes(1))
console.log(mes(12))
console.log(mes(13))

/* RESOLUÇÃO DO PROFESSOR (MELHOR)
function receberNomeDoMes(numero) {
const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
return mapeamento[--numero];
} */