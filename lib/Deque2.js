/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um dos lados
*/

module.exports = class Deque {
    constructor() {         // Igual ao do Queue2
        this.data = {}      // Armazenamento
        this.head = 0       //"Cabeça" início da fila
        this.tail = -1
    }

    // Inserção no início
    insertFront(value) {       
        this.head--
        this.data[this.head] = value
    }

    // Inserção no fim
    InsertRear(value) {     // Igual ao enqueue() do Queue2
        this.tail++
        this.data[this.tail] = value
    }

    // Remoção no início
    removeFront() {         // Igual ao dequeue() do Queue2
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Remoção no fim
    removeRear() {
        let value = this.data[this.tail]
        delete this.data[this.tail]
        this.tail--
        return value
    }

    // "Olhadinha no início"
    peekFront() {           // Igual ao peek() do Queue2
        return this.data[this.head]
    }

    // "Olhadinha no fim"
    peekRear() {
        return this.data[this.tail]
    }

    // Tamnaho do deque
    size() {                // Igual ao size() do Queue2
        return this.tail - this.head + 1
    }
}