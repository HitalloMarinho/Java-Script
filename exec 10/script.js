var contador = 0; // inicializa o contador
var botao = document.getElementById("btnadd"); // obtém o botão
var botaoReset = document.getElementById("btnsub"); // obtém o botão de reset
var spanContador = document.getElementById("contador"); // obtém o elemento para mostrar o contador

// adiciona um listener para o evento de clique do botão
botao.addEventListener("click", function() {
	contador++; // incrementa o contador
	spanContador.innerHTML = contador; // atualiza o elemento que mostra o contador
});

botaoReset.addEventListener("click", function() { // adiciona o evento de clique ao botão de reset
	contador = 0; // zera o contador
	spanContador.innerHTML = contador; // atualiza o elemento que mostra o contador
});