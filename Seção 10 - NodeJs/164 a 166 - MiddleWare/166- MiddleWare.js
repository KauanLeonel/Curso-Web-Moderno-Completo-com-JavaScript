/*FrameWork é um conjunto de regras e funções que vai definir o seu jeito de escrever o código, diferente da biblioteca que só adiciona
funcionalidades.
O middleWare é um padrão de construção de código utilizado para reutilizador trechos escritos anteriormente. Por exemplo, se há
uma funcão que passa um obj(tem que passar um obj) por três funcionalidades, ao invés de colocá-las na função, o padrão indica que 
elas devem ser escritas separadamente e com uma função next() para a próxima etapa.  */

//MiddleWare ou Chain of responsability

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' //Como é o passo final, ele não precisa passar o next

const exec = (ctx, ...middleWares) =>{
    const execPasso = indice =>{
        middleWares && indice < middleWares.length &&
        middleWares[indice](ctx, () => execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = { }
exec(ctx, passo1, passo2, passo3) //Pode alterar a ordem dos passos. Caso o passo3 seja chamado primeiro, ele não irá chamar os outros
//Pq não tem next
console.log(ctx)