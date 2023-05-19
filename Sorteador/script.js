function gerar() {
    var min = Number(document.getElementById('primeiro_numero').value)
    var max = Number(document.getElementById('segundo_numero').value)
    var resultado = document.getElementById('resultado')

    var numeros = [];
    for (var i = min; i <= max; i++) {
      numeros.push(i);
    }

    // Exibe o número sorteado
    //resultado.innerHTML += "Número sorteado: " + numeroSorteado;


/*  console.log(`O valor de max é ${max} e o seu tipo é ${typeof (max)}`)
    console.log(`O valor de max é ${min} e o seu tipo é ${typeof (min)}`) */

    var index = Math.floor(Math.random() * (max - min + 1) + min);
    var numeroSorteado = numeros.splice(index, 1)[0];
    resultado.innerHTML += `${numeroSorteado}-`;

}

function limpar() {
    resultado.innerHTML = ``
}

