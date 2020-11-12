const LinkedList = require('./lib/linkedList')

let lista = new LinkedList()
console.log(lista.toString(), lista.size())

lista.push('amarelo')
console.log(lista.toString(), lista.size())

lista.push('branco')
console.log(lista.toString(), lista.size())

lista.push('rosa')
console.log(lista.toString(), lista.size())

lista.push('azul')
console.log(lista.toString(), lista.size())


// Inserção na primeira posição
lista.insertAt(0, 'roxo')
console.log(lista.toString(), lista.size())

// Inserção na última posição, mesmo efeito que push()
lista.insertAt(5, 'verde')
console.log(lista.toString(), lista.size())

// Inserção na posição 3
lista.insertAt(3, 'laranja')
console.log(lista.toString(), lista.size())

// Inserção na posição 1
lista.insertAt(1, 'preto')
console.log(lista.toString(), lista.size())
