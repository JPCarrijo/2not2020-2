const Deque = require('./lib/Deque2')

let deque = new Deque()

console.log(deque)

deque.InsertRear('Zozimário')
deque.InsertRear('Leandrícia')
deque.InsertRear('Sauloeber')
deque.InsertRear('Tercivander')
deque.InsertRear('Naldelaine')

console.log(deque)

// Fura-fila
deque.insertFront('Yarilza')
console.log(deque)

// Verificando as pontas do deque
let primeiro = deque.peekFront()
let ultimo = deque.peekRear()
console.log(deque)
console.log({primeiro, ultimo})

// Desistência do último colocado
let desistente = deque.removeRear()
console.table(deque)
console.log({desistente})

// Remoção do primeiro colocado
let proximo = deque.removeFront()
console.table(deque)
console.log({proximo})




