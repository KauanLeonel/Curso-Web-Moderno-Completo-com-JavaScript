// JSON = Javascript Object Notation
//Json é um formato de dados

const Object ={
    a: 2,
    c: 3,
    d: 4,
    soma() {
        return a + c + d
    }
}
//Converter para json
console.log(JSON.stringify(Object)) // Ele é um formato de dados, não recebe funções 

//console.log(JSON.parse("{A: 23, C:553, D: 34}")) Errado
console.log(JSON.parse('{"A": 23, "C":553, "D": 34}')) //Forma correta 
console.log(JSON.parse('{"A": 23, "C":"Kauan", "D": true, "E": {}, "F": []}'))