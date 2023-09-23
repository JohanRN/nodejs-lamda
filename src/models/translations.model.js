class translations {
    constructor() {
        this.translations = {
            name: 'nombre',
            height: 'altura',
            mass: 'masa',
            hair_color: 'color_de_cabello',
            skin_color: 'color_de_piel',
            eye_color: 'color_de_ojos',
            birth_year: 'año_de_nacimiento',
            gender: 'genero',
            homeworld: 'planeta_de_origen',
            films: 'peliculas',
            species: 'especie',
            vehicles: 'vehiculos',
            starships: 'naves_espaciales',
            created: 'creado',
            edited: 'editado',
            url: 'URL',
        };
    }
    translateAttributes(obj) {
        const translatedobject = {};
        for (const key in obj) {
            if (this.translations.hasOwnProperty(key)) {
                translatedobject[this.translations[key]] = obj[key];
            } else {
                translatedobject[key] = obj[key];
            }
        }
        return translatedobject;
    }
    transformedData(data) {
        const arraytransformedData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key].replace(/^"|"$/g, '');
                arraytransformedData[key] = value;
            }
        }
        const propertiesToParse = ["peliculas", "especie", "vehiculos", "naves_espaciales"];
        for (const prop of propertiesToParse) {
            if (arraytransformedData[prop]) {
                arraytransformedData[prop] = JSON.parse(arraytransformedData[prop]);
            }
        }
        return arraytransformedData
    }
}
module.exports = translations;