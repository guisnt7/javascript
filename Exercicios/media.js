/** 
 * Cálculo de média aritmética de 3 valores
 *   @author guisnt7
 */

// importar a biblioteca read-linesync
const input = require ('readline-sync')

// variáveis
let num1, num2, num3, media
console.clear()
console.log("Cálculo de média aritmética de 3 números")

// entrada
// no console entradas (input) precisam ser convertidas com o uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

// saída
console.log(`Média: ${media.toFixed()}`)

