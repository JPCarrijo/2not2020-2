let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara dois elementos do vetor
    Recebe dois valores do vetor
    Retorna: 
        - true, se o PRIMEIRO valor for MAIOR que o segundo 
        - false, caso contrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    //let inicio = 0
    //let fim = vetorl.ength - 1
    if (fim > inicio) { // Garante que haja, PELO MENOS, DOIS elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim

        for (let i = inicio; i < fim; i++) {
            comparacoes++
            if(fnComp(vetor[posPivot], vetor[i])) { // Parâmetros invertidos
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++

        quickSort(vetor, fnComp, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim)    // Lado direito
    }
}
/*
let nums = [90, 81, 72, 63, 54, 45, 36, 27, 18, 9]

console.time('Teste Nums')
quickSort(nums)
console.log(nums)
console.timeEnd('Teste Nums')
console.log({passadas, comparacoes, trocas}) */
/*
const nomes = require('./dados/100-mil-nomes')

console.time('Teste Nomes')
quickSort(nomes)
console.timeEnd('Teste Nomes')
console.log(nomes)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})*/

const candidatos = require('./dados/candidatos-2018')

console.time('Teste Candidatos')
quickSort(candidatos, (a,b) => {
    // Ordenação considerando primeiro 
    if(a.NR_CANDIDATO == b.NR_CANDIDATO){
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    } else if(a.NR_CANDIDATO > b.NR_CANDIDATO) return true
      else return false
})

console.timeEnd('Teste Candidatos')
console.log(candidatos)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})