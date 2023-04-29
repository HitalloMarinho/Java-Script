function verificar() {

    var numero1 = Number(document.getElementById('number1').value)
    console.log(numero1)
    var numero2 = Number(document.getElementById('number2').value)

    if (numero1 > numero2) {
        document.getElementById("resultado").innerHTML =  `O número ${numero1} é maior`;
    } else if (numero1 < numero2) {
        document.getElementById("resultado").innerHTML =  `O número ${numero2} é maior`;
    } else {
        document.getElementById("resultado").innerHTML = `<p>O ${numero1} é igual ao ${numero2}</p>`
    }

}