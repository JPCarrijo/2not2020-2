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

    // Retorna o valor armazenado na árvore
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

    // Retorna o valor armazenado na árvore
    max() {
        let maximum = this.maxNode(this.root)

        if(maximum) return maximum.data
        else null
    }

    // Retorna o nodo cujo data é o maior valor da árvore
    maxNode(root) {
        let maximum = root
        // Vira à direita no root e desce reto "toda a vida"
        while(maximum != null && maximum.right != null) {
            maximum = maximum.right
        }
        return maximum
    }

    // Verifica se um determinado valor (key) existe na árvore. Retorna 
    // true caso exista e false caso contrário
    search(key) {
        return this.searchNode(this.root, key)
    }
    
    // Verifica se existe algum nodo, a partir de uma dada raiz (root), que
    // contenha o valor especificado em key. Retorna true caso exista e false
    // caso contrário
    searchNode(root, key) {
        // Caso 1: o root está vazio
        if(root === null) return false

        // Caso 2: key é maior que o data do root
        if(key < root.data) return this.searchNode(root.left, key)

        // Caso 3: key é maior que o data do root
        else if(key > root.data) return this.searchNode(root.right, key)

        // Caso 4: key é igual ao data do root
        else return true    // Encontrado o nodo que contém key
    }


    // Manda excluir o nod com o key especificado(caso exista) e retorna
    // a raiz da árvore, que pode ter mudado
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    // Encontra e exclui o nod (caso exista) com o key especificado e 
    // retorna a raiz da árvore, que pode ter mudado
    removeNode(root, key) {
        // Caso 1: árvore vazio
        if(root === null) return null

        // Caso 2: key é menor que o data do root
        if(key < root.data) {
            root.left = this.removeNode(root.left, key)
            return root
        }

        // Caso 3: key é maior que o data do root
        else if(key > root.data) {
            root.right = this.removeNode(root.right, key)
            return root
        }

        // Caso 4: key é igual ao data do root (encontrou o nodo a ser removido)
        else {
            // Caso 4a: exclusão de nodo folha (grau 0)
            if(root.left === null && root.right === null) {
                root = null
                return null
            }
            // Caso 4b: exclusão de nodo apenas com subárvore à esquerda (grau 1)
            else if(root.left !== null && root.right === null) {
                root = root.left
                return root
            }
            // Caso 4c: exclusão de nodo apenas com subárvore à direita (grau 1)
            else if(root.left === null && root !== null) {
                root = root.right
                return root
            }
            // Caso 4d: exclusão de nodo de grau 2
            else {
                // É preciso encontrar o MAIOR valor do lado ESQUERDO ou 
                // aquele com o MENOR valor do lado DIREITO
                let newRoot = this.minNode(root.right)
                // let newRoot = this.maxNode(root.left)
                
                // Leva o valor do nodo encontrado para o root
                root.data = newRoot.data
                
                // Manda excluir o nodo que era o menor do lado direito, pois
                // seu valor já está na raiz da subárvore e seu valor, neste
                // momento, está duplicado na árvore
                root.right = this.removeNode(root.right, newRoot.data)

                // Se optar pelo MAIOR do lado ESQUERDO, a linha anterior deve ser
                // root.left = this.removeNode(root.left, newRoot.key)
                return root
            }
        }
    }

}