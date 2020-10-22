let pilha = []

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita ao final do vetor
    pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.length > 0) {
    // Retiradas na pilha devem ser feitas também no FINAL
    inverso += pilha.pop()
}

console.log(pilha)

console.log(inverso);
