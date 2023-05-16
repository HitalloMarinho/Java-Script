function gerar() {
    var min = Number(document.getElementById('primeiro_numero').value)
    var max = Number(document.getElementById('segundo_numero').value)
    var resultado = document.getElementById('resultado')

/*  console.log(`O valor de max é ${max} e o seu tipo é ${typeof (max)}`)
    console.log(`O valor de max é ${min} e o seu tipo é ${typeof (min)}`) */

    var randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    resultado.innerHTML = `<p>${randomInt}</p>`;
}

function limpar() {
    resultado.innerHTML = ``
}

