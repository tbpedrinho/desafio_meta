const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Get dentro da torta de produtos'
    });
});


router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Post dentro da torta de produtos'
    });
});

router.get('/:id_contato', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Get dentro da torta de produtos'
    });
});

module.exports = router;