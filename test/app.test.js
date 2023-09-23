const request = require('supertest');
const app = require("../src/server/server");


describe("Pruebas", () => {
    test("Retornar Personaje", async () => {
        const response = await request(app).get("/starwars-character?id=14");
        expect(response.statusCode).toBe(200);
    });
    test("Registrar Personaje", async () => {
        const response = await request(app).post("/starwars-character").send({
            "id": 78, // cambiar id para grabar un nuevo personaje
            "nombre": "Palpatine",
            "altura": "170",
            "masa": "75",
            "color_de_cabello": "grey",
            "color_de_piel": "pale",
            "color_de_ojos": "yellow",
            "año_de_nacimiento": "82BBY",
            "genero": "male",
            "planeta_de_origen": "https://swapi.py4e.com/api/planets/8/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "especie": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehiculos": [],
            "naves_espaciales": [],
            "creado": "2014-12-15T12:48:05.971000Z",
            "editado": "2014-12-20T21:17:50.347000Z",
            "URL": "https://swapi.py4e.com/api/people/21/"
        });
        expect(response.statusCode).toBe(200);
    });
});