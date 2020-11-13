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

// Remoção na última posição
let removido = lista.pop()
console.log(lista.toString(), lista.size(), {removido})

removido = lista.pop()
console.log(lista.toString(), lista.size(), {removido})

// Remoção do primeiro elemento
removido = lista.removeAt(0)
console.log(lista.toString(), lista.size(), {removido})

// Remoção na posição 3
removido = lista.removeAt(3)
console.log(lista.toString(), lista.size(), {removido})

// Inserções aleatórias para aumentar o tamanho da lista
lista.push('vermelho')
lista.insertAt(0, 'marrom')
lista.insertAt(2, 'cinza')
console.log(lista.toString(), lista.size())

let p0 = lista.getAt(0)
let p4 = lista.getAt(4)
let p6 = lista.getAt(6)
let p9 = lista.getAt(9)
console.log(lista.toString(), lista.size(), {p0, p4, p6, p9})

let posCinza = lista.indexOf('cinza')
let posMarrom = lista.indexOf('marrom')
let posVermelho = lista.indexOf('vermelho')
let posRoxo = lista.indexOf('roxo')
console.log(lista.toString(), lista.size(), {posCinza, posMarrom, posVermelho, posRoxo})
