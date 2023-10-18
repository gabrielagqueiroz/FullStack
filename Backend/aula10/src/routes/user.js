const express =  require('express');
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../entity/User');


const router = express.Router();

router.post('/usuarios', async (req, res) => {
    req.body.password = await argon2.hash(req.body.password);
    
    let data = await User.create(req.body);

    res.status(201).send(data);
});


router.post('/login', async (req, res) => {
    let data = await User.findOne({
        where: {
            email: req.body.email
        }
    });


    if(!data) {
        res.status(400).send({
            error: "user not found"
        });
    }

  

    res.send(req.body);
});



module.exports = router;