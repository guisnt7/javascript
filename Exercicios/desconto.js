/**
 * Calculo de valor do desconto
 * 
 * @author guisnt7
 */

const input = require ("readline-sync")

let totalDesconto, total, desconto

console.clear()
console.log("Calculo do valor do desconto")

total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em % "))

totalDesconto = total - ((desconto * total) / 100)

console.log(`total com o desconto: R$ ${totalDesconto.toFixed(2)}`)








