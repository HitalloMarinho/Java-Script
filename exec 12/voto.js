var idade = 70

//Menores que 16 anos não votam
//Entre 16 e 18 voto opcional
//Maiores de 18 anos tem obrigação de votar
//Acima de 70 voto opcional

if (idade < 16) {
    console.log('Não Vota.')
} else if (idade < 18 || idade >=70) {
    console.log('Voto Opcional.')
} else {
    console.log('Voto Obrigratório.')
}