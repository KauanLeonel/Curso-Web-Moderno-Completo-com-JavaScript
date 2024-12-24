/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
e o resto da divisão destes dois valores.  */

const divisão = function(num, dvsor){
    const res = num/dvsor;
    const resto = num%dvsor
    console.log(`O resultado da divisão entre ${num} e ${dvsor} é = ${res}. O resto é = a ${resto}`)
}

divisão(7, 3)