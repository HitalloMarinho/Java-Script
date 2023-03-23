function calcular() {
    var nome = prompt('Qual o nome do aluno ')

    var numero = Number.parseInt(window.prompt(`Qual a primeira nota do aluno ${nome} ?`))

    var numero2 = Number.parseInt(window.prompt(`Além da nota ${numero} , qual foi a outra nota do aluno ${nome} `))

    var soma = (numero + numero2) / 2
/* resultado = média  */
    média = soma >= 7 ? 'aprovado' : 'reprovado'
    
    resultado.innerHTML = `<p> Calculo da media do aluno ${nome}</p>`
    resultado.innerHTML += `<p>As notas obtidas foram ${numero} e ${numero2}</p>`
    resultado.innerHTML += `<p>A media final do aluno sera ${soma} </p>`
    resultado.innerHTML += `<p>O aluno ${nome} foi ${média}</p>`

    

    //console.log(`ola ${nome}`)
}