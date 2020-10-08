/*
    Algoritmo de ordenação Bubble Sort

    Estratégia:
    Percorrer o vetor de dados, comparando elementos adjacentes 
    e promovendo a troca quando o sucessor é maior que o antecessor.

    O percurso no vetor é feito tantas vezes quando necessário, até 
    que nenhuma troca seja efetuada no percurso.
*/

function bubbleSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2) 
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Compaando o elemento da posição atual (i) 
            // com o elemento da frente (i + 1)
            if(vetor[i] > vetor[i + 1]) {
                //  A troca usando a desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while(trocas > 0)
    // Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
} 

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time('teste 1')
bubbleSort(nums)
console.timeEnd('teste 1')

console.log(nums)
console.log('.............................')

let empresas = require('./dados/15-mil-empresas.js')

console.time('Teste empresas')
bubbleSort(empresas)
console.timeEnd('Teste empresas')
console.log(empresas)


let nomes = require('./dados/100-mil-nomes')

console.time('Teste nomes')
bubbleSort(nomes)
console.log('Teste nomes')
console.log(nomes)


