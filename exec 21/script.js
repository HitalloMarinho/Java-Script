function verificar() {

    var numero1 = Number(document.getElementById('number1').value)
    console.log(numero1)
    var numero2 = Number(document.getElementById('number2').value)

    var numero3 = Number(document.getElementById('number3').value)

    if (numero1 > numero2) {
        if (numero1 > numero2) {
            document.getElementById("resultado").innerHTML = `O número ${numero1} e maior`
        } else {
            document.getElementById("resultado").innerHTML = `O número ${numero2} e maior `
        }
    } else if (numero2 > numero3) {
        if (numero2 > numero3) {
            document.getElementById("resultado").innerHTML = `O número ${numero2} e maior`
        } else {
            document.getElementById("resultado").innerHTML = `O número ${numero3} e maior`
        }
    } else if (numero1 == numero2 == numero3) {
        if (numero1 == numero2 == numero3) {
            document.getElementById("resultado").innerHTML = `Os números são iguais`
        } else {
            document.getElementById("resultado").innerHTML = `O número ${numero3} e maior`
        }
    } else {
        document.getElementById("resultado").innerHTML = `O númeor ${numero3} e maior`
    }


}