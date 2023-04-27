var numero = document.getElementById('number1')
var caixa1 = document.getElementById('caixa1')
var caixa2 = document.getElementById('caixa2')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true // A execução dessa função e parada
    } else {
        return false
    }
}

function Adicionar() {
    if (numero.value != '') {
        if (valores.indexOf(numero.value)) {
            valores.push(Number(numero.value))
            caixa1.innerHTML += `<p>Valor ${numero.value} Adicionado</p>`
            numero.value = ''  // Vai limpar o campo para digitar um novo nome.
            numero.focus()     // Vai deixar o cursor piscando dentro do campo nome.
        } else {
            alert(`Burro(a)! o nome ${numero.value} já foi desgraça ruim...`)
            numero.focus()
        }

    } else {
        alert('Digite um número válido!')
        numero.focus()
    }
}

function Analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antesde finalizar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) { // Para cada valor da lista faça isso...
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        caixa2.innerHTML = ''
        caixa2.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        caixa2.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        caixa2.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        caixa2.innerHTML += `<p>Somando todos os valores e ${soma}.</p>`
        caixa2.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

function Limpar() {
    valores = []
    lista.innerHTML = ''
}