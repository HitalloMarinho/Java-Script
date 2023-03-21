function calcular() {
    var numero = Number.parseInt(window.prompt(`digite um numero`))

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `<p> O dobro de ${numero} e ${numero * 2} e a metade e ${numero / 2}!</p>`
}