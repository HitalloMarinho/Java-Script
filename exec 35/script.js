function verificar() {
    var anoNascimento = document.querySelector('#anoNascimento').value;
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    var input_radio = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (input_radio[0].checked) {
        genero = 'Homem'

        if (idade < 12) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é uma criança do sexo masculino.`
            img.setAttribute('src', 'imagens/criançamenino.jpg')
            img.setAttribute('height', '450')
        } else if (idade < 25) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é um Jovem do sexo masculino.`
            img.setAttribute('src', 'imagens/jovemmenino.jpg')
            img.setAttribute('height', '600')
        } else if (idade < 60) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é um Adulto do sexo masculino.`
            img.setAttribute('src', 'imagens/adultomenino.png')
            img.setAttribute('height', '450')
        } else {
            resultado.textContent = `Sua idade é ${idade} anos. Você é um Idoso do sexo masculino.`
            img.setAttribute('src', 'imagens/idosomenino.png')
            img.setAttribute('height', '450')
        }

    } else {
        genero = 'Mulher'

        if (idade < 12) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é uma criança do sexo feminino.`
            img.setAttribute('src', 'imagens/criançamenina.png')
            img.setAttribute('height', '600')
        } else if (idade < 25) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é uma Jovem do sexo feminino.`
            img.setAttribute('src', 'imagens/jovemmenina.jpg')
            img.setAttribute('height', '600')
        } else if (idade < 60) {
            resultado.textContent = `Sua idade é ${idade} anos. Você é uma Adulta do sexo feminino.`
            img.setAttribute('src', 'imagens/adultomenina.png')
            img.setAttribute('height', '600')
        } else {
            resultado.textContent = `Sua idade é ${idade} anos. Você é uma Idosa do sexo feminino.`
            img.setAttribute('src', 'imagens/idosamenina.png')
            img.setAttribute('height', '600')
        }

    }

    resultado.appendChild(img)
}
