function açãoclicar1() {

    resultado1.innerHTML = ``

    for (var cont = 0; cont <=5; cont ++){
        resultado1.innerHTML += `Passo ${cont} <br>`
    }
}

function açãoclicar2() {
    var cont = 0

    resultado2.innerHTML = ``

    while (cont <=5) {
        resultado2.innerHTML += `Passo ${cont} <br>`
        cont++
    }

}

function açãoclicar3() {
    var cont = 0

    resultado3.innerHTML = ``

    do {
    resultado3.innerHTML += `Passo ${cont} <br>`
    cont++
    } while (cont <= 5)        
}