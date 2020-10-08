// Pré-requisito para a busca binária: o conjunto de dados 
// PRECISA estar ordenado pelo critério de busca

let comp = 0

// Implementação recursiva
// Uma função chama a si mesma com pelo menos um de seus parâmetros com valor alterado
// Toda função recursiva precisa ter PELO MENOS uma condiçao de saída. isto é, uma possibilidade
// que não envolve uma chamada a ela mesma.

// Os parâmetros inicio e fim são OPCIONAIS. Caso a função seja chamada sem específica-los,
// eles assumirão os valores indicados.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {
    // let inicio = 0
    // let fim = lista.length - 1

    if(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let result = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if (result == 0) {
            comp++
            return meio        // Condição de saída
        } else if (result < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        } else { // result > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca , fnComp, meio + 1, fim)
        }
    } return -1  // Valor não encontrado
}

function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if (valorBusca === obj.first_name) return 0
    // Um número negativo para indicar que o primeiro < segundo
    else if (valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o primeiro > segundo
    else return 1
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, , 80, 88, 94]

console.log(buscaBinaria(nums, 35, (elPos, busca) => {
    if(busca === elPos) return 0
    else if(busca < elPos) return -1
    else return 1
}, 3))


// Termina a execução sem passar pelas linhas abaixo
//process.exit(0) // 0 = saindo ok, sem erro

let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
//console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

comp = 0

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)

comp = 0