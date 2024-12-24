/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.   */

function jurosSmples(app, juros, tempo){
    for(let i = 1; i <= tempo; i++){
        app += (app/100)*juros
    }
    return app
}

function jurosComposto(app, juros, tempo){
    for(let i = 0; i <= tempo; i++){
        app += (app/100)*juros
    }
    return app
}

console.log(jurosSmples(500, 50, 2))