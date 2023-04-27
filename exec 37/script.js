var nomes = []
var nome = document.getElementById('input_name')
var lista = document.getElementById('lista')

function cadastrar() {
    if (nome.value != '') {
        if (nomes.indexOf(nome.value)== -1) {
            nomes.push(nome.value)
            nome.value = ''  // Vai limpar o campo para digitar um novo nome.
            nome.focus()     // Vai deixar o cursor piscando dentro do campo nome.
        } else {
            alert(`Burro(a)! o nome ${nome.value} já foi desgraça ruim...`)
            nome.focus()
        }

    } else {
        alert('Digite o nome do aluno')
        nome.focus()
    }
}

function imprimir() {
    lista.innerHTML = ''
    for (var c = 0; c < nomes.length; c++) {
        lista.innerHTML += `<p>Aluno ${nomes[c]}</p>`
    }
}

function limpar() {
    nomes = []
    lista.innerHTML = ''
}