function descobrir(){
    var numero = Number.parseInt(window.prompt(`Digite um número:`))

    if (numero % 2 == 0) {
        resultado.innerHTML = `<p>O número ${numero} é par.</p>`
    } else {
        resultado.innerHTML = `<p>O número ${numero} é ímpar.</p>`
    }
}