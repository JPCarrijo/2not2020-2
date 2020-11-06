/*
    Estrutura de dados Pilha 
    Funcionamento: LIFO = Lost In, First Out
    (O último a entrar é o primeiro a sair)
*/

module.exports = class Stack {

    //#data // Atributo privado

    constructor() {
        this.data = []  // Armazenamento 
    }


    // Inserção
    push(value) {
        this.data.push(value)
    }


    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificação do topo da pilha ("olhadinha")
    peek() {
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.data.length
    }
}