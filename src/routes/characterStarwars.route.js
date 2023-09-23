const { Router } = require('express');
const { getCharacter, setCharacter } = require('../controllers/characterStarwars.controller');
const router = Router();

router.get('/starwars-character', getCharacter);
router.post('/starwars-character', setCharacter);

module.exports = {
  routes: router,
};
