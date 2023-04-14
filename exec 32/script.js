function multiplicar() {
    var numero1 = Number(document.getElementById('numero').value)
    var numero2 = 1

    resultado.innerHTML = `<h1> Tabuada de ${numero1}`

    while (numero2 < 11) {

        var soma = numero1 * numero2

        for (var i = 1; i <= 1; i++) {
            resultado.innerHTML += `<p> ${numero1} x ${numero2} = ${soma} </p>`
        }
        numero2++
    }
    
}
