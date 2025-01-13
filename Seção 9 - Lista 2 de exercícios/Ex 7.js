//criar uma função que receba (num, min, max, incluso), onde verifica se o num está entre o max e min. 
// Caso incluso seja true, ele verifica se num é igual ao max ou min

function estaEntre (num, min, max, incluso = false){
    if(incluso == true){
        if(num >= min && num <= max) return true;
        else return false;
    } else{
        if(num > min && num < max) return true;
        else return false;
    }
}

console.log(estaEntre(60, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 100))
console.log(estaEntre(3, 3, 100, true))