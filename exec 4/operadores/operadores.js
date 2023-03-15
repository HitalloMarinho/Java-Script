// Operadores Arimeticos

var a = 5 + 3            // Adição
var b = a % 5            // Resto da divisão
var c = 5 * b ** 2       // Multiplicação e Expoente
var d = 10 - a / 2       // Subtração e Divisão 
var e = 6 * 2 / d        // Multiplicação e Divisão
var f = b % e + 4 / e    // Resto da Divisão, Adição e Divisão

document.write(`<h1>O valor de a é: ${a}</h1>`)
document.write(`O valor de a é: ${b}<br>`)
document.write(`O valor de a é: ${c}<br>`)
document.write(`O valor de a é: ${d}<br>`)
document.write(`O valor de a é: ${e}<br>`)
document.write(`O valor de a é: ${f}<br>`)

//Operador Ternário
// ? , :

var média = 6.9
var resultado = média >= 7 ? 'Aprovado' : 'Reprovado'
document.write(`O aluno foi <strong>${resultado}.</strong>`)