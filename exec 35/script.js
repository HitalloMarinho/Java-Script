function verificar() {
    var anoNascimento = document.querySelector('#anoNascimento').value;
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    resultado.textContent = `Sua idade é ${idade} anos.`;
}