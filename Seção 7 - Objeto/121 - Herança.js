const Ferrari = {
    modelo: 'f40',
    velMax: 340
}

const Volvo ={
    modelo: "v40",
    velMax: 200
}

console.log(Ferrari.__proto__) // Descobrir a relação de parentesco do obj
console.log(Ferrari.__proto__ === Object.prototype) // Por padrão é o Obj.prototype
console.log(Volvo.__proto__ === Object.prototype) // AO MENOS QUE SEJA CRIADA COM SUA FUNÇÃO CONSTRUTORA
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)