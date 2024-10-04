/**
 * Cálculo do terreno
 * 
 *     @author guisnt7
 */

const input = require ("readline-sync")

let comprimento, largura, area

console.clear()
console.log("Cálculo da área de um terreno")

comprimento = Number(input.question("Digite o comprimento do terreno: "))
largura = Number(input.question("Digite a largura do terreno:  "))

area = comprimento * largura

console.log(`área do terreno é: ${area.toFixed(1)} metros quadrados`)












