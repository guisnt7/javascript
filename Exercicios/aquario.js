/**
 * 
 * Cálculo do volume de um aquário
 * 
 *   @author guisnt7
 */

const input = require ('readline-sync')

//váriaveis 
let comprimento, altura, largura,volume
console.clear()
console.log("Cálculo do volume de um aquário")

//entrada
comprimento = Number(input.question("Digite o comprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

//processamento
volume = (comprimento * largura * altura) / 1000

//saída 
console.log(`volume: ${volume.toFixed(2)} litros`)















