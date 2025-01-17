const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //Url de uma base de dados em json
const axios = require ('axios') // Pegar a biblioteca do axios
//axios faz requisições para obter informações de um servidor remoto


//DESAFIO: PEGAR O MENOR SALÁRIO DE UMA FUNCIONÁRIA CHINESA 
axios.get(url).then(response => { //O get ele pega do site e o then vai servir para pegar todos os funcionários
    const funcionarios =response.data
    let chine = funcionarios => funcionarios.pais == 'China'
    let femme = funcionarios => funcionarios.genero == 'F'
    const chinesas = funcionarios.filter(chine).filter(femme)
    const menor = chinesas.reduce((menorSalario, atual) =>{ // Não dá para usar o forEach pq ele faz uma ação para cada item
        return atual.salario < menorSalario.salario? atual : menorSalario
    })
    console.log(menor)
})