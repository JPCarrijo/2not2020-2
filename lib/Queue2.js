module.exports = class Queue {

    constructor() {
        this.data = {}   // Armazenamento
        this.head = 0    // "Cabeça" (ínicio da fila)
        this.tall = -1   // "Cauda" (final da fila)
    }

    // Inserção
    enqueue(value) {
        //this.data.push(value)
        this.tall++
        this.data[this.tall] = value
    }

    // Remoção
    dequeue() {
        //return this.data.shift()
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // "Olhadinha" (no ínicio da fila)
    peek() {
        return this.data[this.head]

    }

    // Tamanho da fila
    size() {
        return this.tall - this.head + 1
    }
}