class FormaGeometrica {
    constructor(b = 1, a = 1, t = 'R') {
        if(isNaN(b) || b <= 0) {
            throw new Error(`A base numérica deve ser maior que zero.`)
        }

        if(isNaN(a) || a <= 0) {
            throw new Error(`A altura numérica deve ser maior que zero.`)
        }

        //if(t != 'R' && t != 'T' && t != 'E') {
        if(['R', 'T', 'E'].indexOf(t) < 0) {
            throw new Error(`O tipo deve ser R, T ou E.`)
        }

        this.base = b
        this.altura = a
        this.tipo = t
    }


    // Método
    area() {
        switch(this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI
            default: // Tipo Inválido
                return null
        }
    }

}

const retangulo = new FormaGeometrica(2, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const tchonga = new FormaGeometrica(8, 3, 'T')

console.log(retangulo);
console.log(triangulo);
console.log(elipse);
console.log(tchonga)


console.log(retangulo.area())

retangulo.altura = 6
retangulo.base = 2.75

console.log(retangulo.area())
console.log(tchonga.area())

console.log(`Área de tchonga:`, tchonga.area())
console.log(`Base de tchonga: `, tchonga.base)
tchonga.base = 'trem'
console.log(`Área de tchonga:`, tchonga.area())
