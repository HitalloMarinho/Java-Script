// Variáveis Compostas 
// Array

var lista = [2, 5, 9, 4] // Isso declaram uma váriavel do tipo Array com os valores 2, 5, 9 e 4.

var nomes = ['Jaderson', 'Weverton', 'Geovanna', 'Victório', 'Marcus', 'Breno', 'Hitallo']

console.log(lista[2])
console.log(nomes[3])

console.log(`A lista contém ${nomes.length} valores.`) // lenght retorna o tamanho da lista.

for (var c = 0; c < nomes.length; c++) {
    console.log(nomes[c]) 
}

lista.unshift(51) // Adicionar um valor no inicio do Array(lista)
console.log(lista) 

lista.push(101) // Adiciona um valor no final do Array(lista)
console.log(lista)

lista.pop() // Remove o ultimo elemento da lista 
console.log(lista)

lista.shift() // Remove o primeiro elemento da lista
console.log(lista) 

lista.sort() // Classificar em ordem crescente
console.log(lista)

lista.reverse() // Classificar em ordem decrescente
console.log(lista)

console.log(nomes.indexOf('Breno'))

nomes.splice(0, 1, 'Wallas', 'Ricardo')

console.log(nomes)

var cadastro = [
    ['Jaderson', 33, '70kg', 1.69, ['Francisco', 'Marlene']],
    ['Geovanna', 16, '49kg', 1.56]
]

console.log(cadastro[0]) 
console.log(cadastro[0][4][1])