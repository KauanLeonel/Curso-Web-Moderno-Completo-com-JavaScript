//Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessa e manipular vars externas à função

const x = 'global'

function fora(){
    const x ='local'
    function dentro(){
        return x;
    }
    return dentro()
}

console.log(fora())