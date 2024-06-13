var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res) {
    try {
        const response = await axios.get('https://dummyjson.com/users/2');
        const user = response.data;
        res.json({ id: user.id, firstName: user.firstName, lastName: user.lastName });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao conectar à API', details: error.message });
    }
});

module.exports = router;
