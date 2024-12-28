/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */

function alt(altura1, taxa1, altura2, taxa2){
    let res, i = 0
    if (altura1 == altura2 && taxa1 == taxa2) return res = `As duas crianças possuem a mesma altura e taxa de crescimento`
    if (altura1 > altura2 && taxa1 == taxa2) return "A criança 1 sempre será maior "
    if (altura1 < altura2 && taxa1 == taxa2) return "A criança 2 sempre será maior "
    if (taxa1 > taxa2){
        while (altura1 < altura2+1){
            altura1 += taxa1
            altura2 += taxa2
            i++
        }
        return `O menino um será maior que o menino dois em ${i} anos, ele terá ${altura1} e o segundo terá ${altura2}`
    }
    if (taxa2 > taxa1){
        while (altura2 < altura1+1){
            altura1 += taxa1
            altura2 += taxa2
            i++
        }
        return `O menino dois será maior que o menino dois em ${i} anos, ele terá ${altura2} e o primeiro terá ${altura1}`
    }
}

console.log(alt(100, 12, 120,12))
console.log(alt(100, 12, 100,12))
console.log(alt(140, 12, 120,12))
console.log(alt(100, 3, 110, 2))
console.log(alt(110, 3, 100, 4))