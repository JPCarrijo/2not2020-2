function buscaSequencial(lista, valorBusca, fnComp) {
    for(let i = 0; i < lista.length; i++) {
        // Encontrou o que está buscando: retorna a posição
        // em que foi encontrado
        //if(lista[i] === valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    } return -1 // Valor não foi encontrado em lista
}


const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome) {
    // Retorna true se o objeto for igual a nome
    return obj.first_name === nome
} 

console.time('FAUSTO')
//console.log(buscaSequencial(listaNomes, 'FAUSTO', comparaNome))
console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('.....................................');

console.time('1000000+')
// Encontrar o primeiro nome da lista que possui mais de 10000 pessoas registradas com ele
let pos = buscaSequencial(listaNomes, 1000000, (obj, valor) => obj.frequency_total > valor)
// Exibe o objeto da posição encontrada e depois a própria posição
console.log(listaNomes[pos], pos)
console.timeEnd('1000000+')



