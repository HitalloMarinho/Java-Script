function media() {
    var nome = prompt('Qual o nome do aluno ')

    var numero = Number.parseInt(window.prompt(`Qual a primeira nota do aluno ${nome} ?`))

    var numero2 = Number.parseInt(window.prompt(`Além da nota ${numero} , qual foi a outra nota do aluno ${nome} `))

    var soma = (numero + numero2) / 2
    /* resultado = média  */
    var media = soma

    if (media < 5.5) {
        document.getElementById("resultado").innerHTML = `<p>Cauculando a média final de <mark>${nome}</mark></p>  <p>As notas obtidas foram <mark>${numero} e ${numero2}</mark></p> <p>A média final será <mark>${soma}</mark></p> <p>O aluno ${nome} foi <span style="color: red;">REPROVADO</span>`
    } else if (media >= 7) {
        document.getElementById("resultado").innerHTML = `<p>Cauculando a média final de <mark>${nome}</mark></p>  <p>As notas obtidas foram <mark>${numero} e ${numero2}</mark> </p> <p>A média final será <mark>${soma}</mark></p> <p>O aluno ${nome} foi <span style="color: green;">APROVADO</span>`
    } else {
        document.getElementById("resultado").innerHTML = `<p>Cauculando a média final de <mark>${nome}</mark></p>  <p>As notas obtidas foram <mark>${numero} e ${numero2}</mark></p> <p>A média final será <mark>${soma}</mark></p> <p>O aluno ${nome} foi <span style="color: orange;">RECUPERAÇÃO</span>`
    }
}
