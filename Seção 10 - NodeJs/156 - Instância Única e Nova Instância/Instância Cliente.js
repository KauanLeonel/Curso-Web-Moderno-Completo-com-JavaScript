const contadorA = require('./Instância Única')
const contadorB = require('./Instância Única') //Eles são a mesma coisa, tanto o A quanto o B, se modificar um, modifica o outro

const contadorC = require('./Instância Nova')() //Diferente daqui, eles são diferentes pq Instância Nova é uma função factore   
const contadorD = require('./Instância Nova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)