function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    console.log(`Valor do Inicio: ${inicio}`)
    console.log(`Valor do Fim: ${fim}`)
    console.log(`Valor do Passo: ${passo}`)
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ""
    if (passo <= 0) {
        resultado.innerHTML = 'O passo não pode ser 0 ou menor.'
    } else if (inicio < fim) {
        while (inicio <= fim) {
            if (inicio + passo > fim) {
                resultado.innerHTML += `${inicio}\u{1F3C1}`
            } else {
                resultado.innerHTML += `${inicio}\u{27A1}`
            }
            inicio += passo
        }
    } else {
        while (inicio >= fim) {
            if (inicio + passo > fim) {
                resultado.innerHTML += `${inicio}\u{1F3C1}`
            } else {
                resultado.innerHTML += `${inicio}\u{27A1}`
            }
            inicio += passo
        }
    }
}