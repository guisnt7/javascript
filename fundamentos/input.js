/**
 * Input de dados via terminal
 * uso do pacote read-line-sync
 *   @author guisnt7
 */

// importar o pacote
const input = require('readline-sync')

let nome

 console.clear()
 
 nome = input.question ("Digite o seu nome:")
 console.log(`Hello ${nome}`)