function descobrir(){
    var numero = Number.parseInt(window.prompt(`Digite um Número:`))

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = `<p>O número ${numero} é par.</p>`
    } else {
        document.getElementById("resultado").innerHTML = `<p>O número ${numero} é ímpar.</p>`
    }
}