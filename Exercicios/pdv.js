/**
 * 
 * 
 * @author guisnt7
 */

const input = require ("readline-sync")

let totalDesconto, total, troco, desconto, valorDesconto,valorPago

console.clear()

console.log("_______   _______   __     __ ")
console.log("|       \ |       \ |  \   |  \ ")
console.log("| $$$$$$$\| $$$$$$$\| $$   | $$ ")
console.log("| $$__/ $$| $$  | $$| $$   | $$ ")
console.log("| $$    $$| $$  | $$ \$$\ /  $$ ")
console.log("| $$$$$$$ | $$  | $$  \$$\  $$ ")
console.log("| $$      | $$__/ $$   \$$ $$  ")
console.log("| $$      | $$    $$    \$$$  ")
console.log("| \$$       \$$$$$$$     \$  ")
console.log("")
console.log("")


// entrada 1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//pross 1
valorDesconto = (desconto * total) / 100

// pross 2
totalDesconto = total - valorDesconto
                                  
//saída 1
console.log("")
console.log("-------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")                                  
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)                
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("")

// entrada 2 
ValorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// pross 3
troco = valorPago - totalDesconto

//saida 2 
console.log("")
console.log(`Valor pago e dinheiro: R$ ${valorPago.toFixed(2)}`)                    
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("--------------------------------------------------")

                                
                                
 
   
                               
                               











