const Stack = require('./lib/Stack2')

let pilha = new Stack()


console.log(pilha)

pilha.push(46)
pilha.push(37)
pilha.push(98)

console.log(pilha)

console.log('--------------------------')

let x = pilha.pop()
console.log(pilha)
console.log('x:', x)

pilha.pop()
console.log(pilha)

console.log('--------------------------')
pilha.push(-3)
console.log(pilha)
