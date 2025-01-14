//Escrever uma função que receba um ano e retorne se ele é bissexto ou não 

function bissexto(ano){
    if(ano % 400 == 0){
        return true
    } else{
        if(ano % 100 == 0)
            return false;
        else{
            if(ano % 4 == 0) return true
            else return false
        }
    }
}

console.log(bissexto(2020))
console.log(bissexto(2100))

/* JEITO OTIMIZADO PELO CHAT
function bissexto(ano) {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
}

console.log(bissexto(2020)); // true
console.log(bissexto(2100)); // false
console.log(bissexto(2000)); // true
//  */