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

    // Percurso em-ordem
    inOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            this.inOrderTraversal(fnCallback, root.left)    // Subárvore esquerda
            fnCallback(root.data)                           // Nó raiz
            this.inOrderTraversal(fnCallback, root.right)   // Subárvore direita
        }
    }

    // Percurso pré-ordem 
    preOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            fnCallback(root.data)                   // Nó raiz
            this.preOrderTraversal(fnCallback, root.left)       // Subárvore esquerda
            this.preOrderTraversal(fnCallback, root.right)      // Subárvore direita
        }
    }

    // Percurso pós-ordem
    postOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            this.postOrderTraversal(fnCallback, root.left) 
            this.postOrderTraversal(fnCallback, root.right)
            fnCallback(root.data)
        }
    }

    // RetornAa o valor armazenado na árvore
    min() {
        let minimum = this.minNode(this.root)

        if(minimum) return minimum.data
        else null
    }

    // Retorna o nodo cujo data é o menor valor da árvore
    minNode(root) {
        let minimum = root
        // Vira à esquerda no root e desce reto "toda a vida"
        while(minimum != null && minimum.left != null) {
            minimum = minimum.left
        }
        return minimum
    }

    // Implemente as funções max() e maxNode()

}