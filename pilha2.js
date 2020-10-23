const Stack = require('./lib/Stack2')

let pilha = new Stack()

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita ao final do vetor
    pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.size() > 0) {
    // Retiradas na pilha devem ser feitas também no FINAL
    inverso += pilha.pop()
}

console.log(pilha)

//console.log(inverso);



/*
console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(7)

console.log(pilha)
console.log('ÚLtimo elemento:', pilha.peek())
console.log('Tamanho: ', pilha.size())

// pilha.unshift(3)

let x = pilha.pop()
console.log('x: ', x)
console.log('ÚLtimo elemento:', pilha.peek())
console.log('Tamanho: ', pilha.size())
console.log(pilha.data)*/