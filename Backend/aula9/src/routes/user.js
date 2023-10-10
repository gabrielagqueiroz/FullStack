const express = require('express');
const User = require('../entity/User');

const router = express.Router()

const validateEmail =  async(req, res, next) => {
    const body = req.body

    if(!body.email) {
        res.status('400').send({
            "error": "Email é obrigatorio!"
        })

        return
    }

    next()
}


router.post('/user', validateEmail, async(req, res) => {
    const body = req.body
    
    const user = await User.create(body)

    res.status(200).send(user);
});


router.post('/user/login', async (req, res) =>{
    let data = await Category.create(req.body);
    res.send(data);
 });

module.exports = router;