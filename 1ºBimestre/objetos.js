//Declaração de objeto vazio
let pessoal1 = {}           //Moderno
let pessoal2 = new Object() //Tradicional

//Declarando a inicializando um objeto já com propriedades
// - propriedade -> atributo + valor
let pessoal3 = {
        nome: 'João das Couves',
        naturalidade: 'Franca/SP', "Data de Nascimento": '1997-11-03',
        estudante_fatec: true
}

// Acessando uma propriedade de um objeto
// Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoal3.nome)
console.log(pessoal3.estudante)

// Acessando uma propriedade composta por várias palavras -> 
// Sintaxe dos colchetes
console.log(pessoal3['Data de Nascimento'])

// Sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades
// cujo nome é uma única palavra
console.log(pessoal3['naturalidade'])


let atrib = 'nome'
console.log(pessoal3[atrib])
 

// Criando novas propriedades em um objeto
pessoal3.nacionalidade = 'portuguesa'               // Única palavra 
pessoal3['registro de estrangeiro'] = 123456789     // Várias palavras 

console.log(pessoal3)

console.log('------------------------------')

//Eliminando uma propriedade
delete pessoal3.estudante

console.log(pessoal3)

// Como percorrer todas as propriedades de um objeto: for...in
for(let prop in pessoal3) {
    console.log(prop)
}

// Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoal3) {
    console.log(`Atributo: ${atrib}; Valor: ${pessoal3[atrib]}`)
}