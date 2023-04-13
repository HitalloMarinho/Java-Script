function multiplicar() {
    var numero1 = Number(document.getElementById('numero').value)
    var numero2 = 1
    var soma = numero1 * numero2

    while (numero2 < 10) {
        resultado.innerHTML = `<p> ${numero1} x ${numero2} = ${soma} </p>`
        for (var i = 1; i <= 10; i++) {
        }
        numero2++
    }
}
