const BinarySearchTree = require('./lib/BinarySearchTree')

let arvore = new BinarySearchTree
console.log(arvore)

arvore.insert(33)
console.log(arvore)

arvore.insert(59)
console.log(arvore)

arvore.insert(10)
console.log(arvore)

arvore.insert(41)
console.log(arvore)

arvore.insert(6)
arvore.insert(70)
arvore.insert(27)
arvore.insert(8)
arvore.insert(64)
console.log(arvore)

//arvore.inOrderTraversal(x => console.log(x))

let vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-Ordem:', vet)

vet = []
arvore.preOrderTraversal(d => vet.push(d))
console.log('Pré-ordem:', vet)

vet = []
arvore.postOrderTraversal(d => vet.push(d))
console.log('Pós-ordem:', vet)

// Menor valor da árvore
console.log('Mínimo: ', arvore.min())
