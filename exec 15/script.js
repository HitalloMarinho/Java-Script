function verificarNumero() {
    // Obtém o número inserido pelo usuário
    var numero = parseInt(document.getElementById("numero").value);
    
    // Define o número desejado
    var numeroDesejado = 60;
    
    // Compara o número inserido com o número desejado
    if (numero <= numeroDesejado) {
      document.getElementById("resultado").innerHTML = `<p>Sua Velocidade atual é de ${numero}km </p> <p>Velocidade dentro do limite permitido.</p> <p>Use sempre cinto de segurança.</p>`;
    } else if (numero > numeroDesejado) {
      document.getElementById("resultado").innerHTML = `<p>Sua Velocidade atual é de ${numero}km </p> <p>Você está sendo <span style="color: red;">MULTADO</span> por exesso de velocidade.</p> <p>Use sempre cinto de segurança.</p>`;
    }
  }
  