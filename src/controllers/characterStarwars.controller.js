const { runQuery } = require("../services/mysql.service")
const Message = require("../models/message.model");
const axios = require('axios');
const translationsModel = require("../models/translations.model");
const CharacterModel = require("../models/characterStarwars.models");
const schemaCharacter = require("../schemas/character.shemas");

async function getCharacter(req, res) {
    try {
        const characterId = req.query.id;

        if (!characterId) {
            return new Message(400, "Bad Request: Missing characterId parameter.", []).send(res);
        }

        const translator = new translationsModel();
        const getCharacterQuery = `CALL sp_GetCharacter(?)`;
        const setCharacterQuery = `CALL sp_SetCharacter(?)`;

        let characterData = await runQuery(getCharacterQuery, [characterId]);
        characterData = characterData.data;

        if (characterData.length > 0) {
            const transformedData = translator.transformedData(characterData[0]);
            return new Message(200, "Operation successfully completed.", transformedData).send(res);
        }
        const swapiUrl = `https://swapi.py4e.com/api/people/${characterId}`;
        const response = await axios.get(swapiUrl);
        const swapiCharacterData = translator.translateAttributes(response.data);
        const characterArray = Object.values(swapiCharacterData).map(value => JSON.stringify(value));
        await runQuery(setCharacterQuery, characterArray);
        return new Message(200, "Operation successfully completed.", swapiCharacterData).send(res);
    } catch (error) {
        return new Message(500, "Error: " + error.message, []).send(res);
    }
}
async function setCharacter(req, res) {
    try {

        const { id, nombre, altura, masa, color_de_cabello, color_de_piel, color_de_ojos, año_de_nacimiento, genero, planeta_de_origen, peliculas, especie, vehiculos, naves_espaciales, creado, editado, URL } = req.body;
        const character = new CharacterModel(id, nombre, altura, masa, color_de_cabello, color_de_piel, color_de_ojos, año_de_nacimiento, genero, planeta_de_origen, peliculas, especie, vehiculos, naves_espaciales, creado, editado, URL);
        const { error } = schemaCharacter.validate(character)
        if (error) return new Message(400, error.message, []).send(res);
        const characterArray = Object.values(character).map(value => JSON.stringify(value));
        const querySetCharacter = `CALL sp_SetCharacter(?)`;
        const result = await runQuery(querySetCharacter, characterArray);
        if (result.code !== 200) return new Message(400, result.data, []).send(res);
        return new Message(200, "Operation successfully completed.", []).send(res);
    } catch (error) {
        return new Message(500, "Error: " + error.message, []).send(res);
    }
}

module.exports = {
    getCharacter,
    setCharacter
}