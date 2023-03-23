function parouimpar() {

    var numero = Number.parseInt(window.prompt(`Numero`))
    
    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = numero + ` é um número par.`;
    } else {
        document.getElementById("resultado").innerHTML = numero + ` é um número ímpar.`;
    }
        
}












/* var numero = 8
var resto = numero % 2
console.log(resto) */


