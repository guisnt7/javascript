/**
 * regra de 3 bro
 * 
 * @author guisnt7
 * 
 */

const input = require ('readline-sync')

let x, y, valor
console.clear()
console.log("Descubra o valor de x e y")

x = Number(input.question("Digite o valor de x: "))
y = Number (input.question("Digite o valor de y: "))

valor = (x * y) / 100

console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)






















