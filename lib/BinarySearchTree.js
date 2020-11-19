class Node {
    constructor(value) {
        this.data = value
        this.left = null        // Esquerda
        this.right = null       // Direita
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null        // Raiz da árvore
    }

    insert(value) {
        let node = new Node(value)

        // Inserção do nodo raiz (primeiro nodo)
        if(this.root === null) this.root = node
        // Busca recursiva pelo local correto de inserção
        else this.insertNode(node, this.root)
    }

    // Insere um nodo em uma subárvore a partir da raiz indicada
    // Parâmetros:
    // - node: o nodo a ser inserido
    // - root: o nodo A PARTIR do qual será efetuada a busca
    insertNode(node, root) {
        if(node.data < root.data) {     // Lado esquerdo
            // Possibilidade 1: a esquerda do nó raiz está livre
            if(root.left === null) root.left = node    // O nodo entra no lugar livre
            // Possibilidade 2: esquerda ocupada, reinicia a busca a partir desse nodo
            // como raiz
            else this.insertNode(node, root.left)
        }
        else if(node.data > root.data) {     // Lado direito
            if(root.right === null) root.right = node
            else this.insertNode(node, root.right)
        }
    }
}