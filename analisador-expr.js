/*

    6 + { 8 / [3 - (9 * 2)] + (4 * 3)}

*/

const Stack = require('./lib/Stack2')

let analisador = new Stack()

let expr = '6 + { 8 / [3 - (9 * 2)] + (4 * 3)}'
//let expr = '6 + { 8 / [3 - (9 * 2)] + (4 * 3)} + [3 * (2 - '


for (let i = 0; i < expr.length; i++) {
    switch (expr.charAt(i)) {
        case '{':
            analisador.push({ pos: i, tipo: 'CH' })
            //console.log(analisador)
            break
        case '[':
            analisador.push({ pos: i, tipo: 'CO' })
            //console.log(analisador)
            break
        case '(':
            analisador.push({ pos: i, tipo: 'PA' })
            //console.log(analisador)
            break
        case '}':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser CH
            if(info && info.tipo == 'CH') {
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            } else {
                console.log(`ERRO: chave fechando na posição ${i} não tem a abertura correspondente`)
            }
            break
        case ']':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser CO
            if(info && info.tipo == 'CO') {
                console.log(`Colchete aberto na posição ${info.pos} e fechado na posição ${i}`)
            } else {
                console.log(`ERRO: colchete fechando na posição ${i} não tem a abertura correspondente`)
            }
            break
        case ')':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo deve ser PA
            if(info && info.tipo == 'PA') {
                console.log(`Parênteses aberto na posição ${info.pos} e fechado na posição ${i}`)
            } else {
                console.log(`ERRO: parênteses fechando na posição ${i} não tem a abertura correspondente`)
            }
    }
}

// Analisar resíduo da pilha
while(analisador.size() > 0) { // Enquanto ainda houver elementos na pilha
    info = analisador.pop()
    switch(info.tipo) {
        case'PA':
            console.log(`ERRO: Parêntese aberto na posição ${info.pos} não tem o fechamento correspondente`)
            break
        case'CO':
            console.log(`ERRO: Colchete aberto na posição ${info.pos} não tem o fechamento correspondente`)
            break
        case'CH':
            console.log(`ERRO: Chave aberta na posição ${info.pos} não tem o fechamento correspondente`)
    }
}
 
console.log(analisador)