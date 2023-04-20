function foto() {
    var resultado = document.getElementById('resultado')

    resultado.innerHTML = '<p>Isso aqui vocês sabem fazer.</p>'

    resultado.innerHTML += '<img id="imagem" height="150" src="imagens/mickey.png">'

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'imagens/lanche.jpg')
    img.setAttribute('height', '150')

    resultado.appendChild(img) 
}