const express = require('express');

const router = express.Router();

router.get('/categorias', async (req, res) =>{
    res.send([
        'Informatica',
        'Escritorio',
        'Livros'
    ]);
});

module.exports = router;