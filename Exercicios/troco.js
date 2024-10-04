/**
 * Cálculo do troco
 * 
 *   @author guisnt7
 */

const input = require ("readline-sync")

let troco, total, valorpago

console.clear()
console.log("Calculo do troco")

valorpago = Number(input.question("Digite o total da compra: "))
total = Number(input.question("Digite o valor pago pelo cliente: "))

troco = total - valorpago

console.log(`o valor do troco é RS$ ${troco}`)




















