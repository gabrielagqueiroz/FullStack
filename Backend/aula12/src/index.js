const express = require('express');

const app = express();

app.use(express.json());

app.get('/bebidas', (req, res) => {
    let bebida1 = {
        id: 1,
        nome:  "suco"
    }
    let bebida2 = {
        id: 2,
        nome: "refri"
    }
    let dados = [f
        bebida1,
        bebida2
    ];

    res.send(dados);
})

app.listen(8000);