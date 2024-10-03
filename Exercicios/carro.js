/**
 * Cálculo de consumo por KM/L
 * 
 * @author guisnt7
 */


const input = require ('readline-sync')

//váriaveis

let consumo, litros, distancia 

//entrada
distancia = Number(input.question("Qual a distancia percorrida: "))
litros = Number(input.question("Quantidade de Litros de combustivel: "))

consumo = distancia / litros 

console.log(`consumo: ${consumo.toFixed(1)} KM/L`)
















