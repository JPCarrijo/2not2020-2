let passadas = 0, comparacoes = 0, trocas = 0
function quickSort(vetor, inicio = 0, fim = vetor.length - 1) {
    //let inicio = 0
    //let fim = vetor.length - 1
    if (fim > inicio) { // Garante que haja, PELO MENOS, DOIS elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim

        for (let i = inicio; i < fim; i++) {
            comparacoes++
            if (vetor[i] < vetor[posPivot]) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++

        quickSort(vetor, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, posDiv + 1, fim)    // Lado direito
    }
}
/*
let nums = [90, 81, 72, 63, 54, 45, 36, 27, 18, 9]

console.time('Teste Nums')
quickSort(nums)
console.log(nums)
console.timeEnd('Teste Nums')
console.log({passadas, comparacoes, trocas}) */

const nomes = require('./dados/100-mil-nomes')

console.time('Teste Nomes')
quickSort(nomes)
console.timeEnd('Teste Nomes')
console.log(nomes)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})