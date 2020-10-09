class FormaGeometrica {
    constructor(b, a, t) {
        this.base = b
        this.altura = a
        this.tipo = t
    }
}

const retangulo = new FormaGeometrica(4, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')

console.log(retangulo.base);
console.log(triangulo.base);
console.log(elipse.base);


