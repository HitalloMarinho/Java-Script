function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if(hora >=0 && hora < 12) {
        msg.innerHTML = `Bom Dia!<br>Agora são ${hora}:${minutos}`
        img.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa Tarde!<br>Agora são ${hora}:${minutos}`
        img.src = 'img/tarde.avif'
        document.body.style.background = '#b9846f'
    }else {
        msg.innerHTML = `Boa Noite!<br>Agora são ${hora}:${minutos}`
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}