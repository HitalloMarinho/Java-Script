for (var i = 0; i < 5; i++) {   // loop para cada parte
    console.log(`#### Loop ${i+1} ####`);  // imprime o número da parte
    for (var j = 1; j <= 5; j++) { // loop para cada número dentro da parte
      console.log((i*5) + j);      // imprime o número atual
    }
  }
  