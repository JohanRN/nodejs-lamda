class CharacterModel {
    constructor(id, nombre, altura, masa, color_de_cabello, color_de_piel, color_de_ojos, año_de_nacimiento, genero, planeta_de_origen, peliculas, especie, vehiculos, naves_espaciales, creado, editado, URL) {
        this.id = id;
        this.nombre = nombre;
        this.altura = altura;
        this.masa = masa;
        this.color_de_cabello = color_de_cabello;
        this.color_de_piel = color_de_piel;
        this.color_de_ojos = color_de_ojos;
        this.año_de_nacimiento = año_de_nacimiento;
        this.genero = genero;
        this.planeta_de_origen = planeta_de_origen;
        this.peliculas = peliculas;
        this.especie = especie;
        this.vehiculos = vehiculos;
        this.naves_espaciales = naves_espaciales;
        this.creado = creado;
        this.editado = editado;
        this.URL = URL;
    }
}
module.exports = CharacterModel;