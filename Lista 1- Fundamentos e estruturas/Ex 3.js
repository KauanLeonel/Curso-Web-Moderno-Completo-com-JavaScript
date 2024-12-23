const pot = function(base, expoente){
    let res = base;
    for(let i = 1; i < expoente; i++){
        res *= base;
        }
    return res;
}

console.log(`${pot(5,3)}`)