/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function cardápio(num, quant){
    let preço
    switch(num){
        case 100:
            preço = 3 * quant
            break;
        case 200:
            preço = 4 * quant
            break;
        case 300:
            preço = 5.5 * quant
            break;
        case 400:
            preço = 7.5 * quant
            break;
        case 500:
            preço = 3.5 * quant
            break;
        case 600:
            preço = 2.8 * quant
            break;
        default:
            preço = "Produto inexistente"
    }
    return preço
}

console.log(cardápio(600, 5))
console.log(cardápio(200, 3))
console.log(cardápio(900, 5))