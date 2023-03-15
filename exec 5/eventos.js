/*
Eventos DOM

Evento(metodo) é tudo que pode acontecer com um elemento(div).
Ex: mouseenter (quando o mouse sobrepoe a div)
mousemove
mouseup
click
mouseout

Funções 
    É um conjunto de códigos que só sera executado quando o evento ocorrer.
    As linhas programadas nesse conjunto chamamos de bloco.
    Um block em Js é delimitado por sinais de "{bloco}".
    Ele precisa ser nomeado com uma function e um nome para a ação.

    Ex: function ação(param(opcional)){

    }

    */


var area = document.getElementById('area')
console.log(area)
var titulo = document.getElementsByTagName('h1')
console.log(titulo)

function centralizar(){
    area.style.alignItems = 'center'
}

function clicar(){
    area.innerHTML = 'Você clicou!'
    area.style.background = 'green'
    area.style.width = '200px'
    area.style.height = '200px'
}

function entrar(){
    area.innerHTML = 'Dentro'
}

function sair(){
    area.innerHTML = 'Fora'
    area.style.background = 'none'
}