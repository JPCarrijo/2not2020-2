/*
    Área do retângulo: base * altura
    Área do triângulo: base * altura / 2
    Área da elipse: (base / 2) * (altura / 2) * PI
*/

let retangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'R' // Retângulo
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T' // Triângulo
}

let elipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E' // elipse
}

let tchonga = {
    gambi: 'arra',
    trem: 'coisa',
    treco: 'troço',
    tipo: 'T'
}

const area = forma => {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T': 
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return null // Passado um tipo forma inválido

    }
}
console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(elipse))
console.log(area(tchonga))