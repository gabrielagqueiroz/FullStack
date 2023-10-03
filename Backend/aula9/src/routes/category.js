//AQUI CRIA OS ENDPOINTS

const express = require('express');
const Category = require('../entity/Category');
const {validSecurity} = require('../security/security');

const router = express.Router();


router.get('/categorias', validSecurity, async (req, res) =>{
   let data = await Category.findAll(); //SELECT * FROM 

   res.send(data);
});

router.get('/categorias/:id', async (req, res) =>{
    let data = await Category.findByPk(req.params.id);
 
    res.send(data);
 });

 router.post('/categorias', async (req, res) =>{
    let data = await Category.create(req.body);
    res.send(data);
 });


 router.delete('/categorias/:id', async(req, res) => {
   let result = await Category.destroy({
      where: {
         id: req.params.id
      }
   });

   if (!result) {
      res.status(404).end();
      return;
   }
 })

 router.patch('/categorias/:id', async(req, res) => {
 /*   let cat = await Category.findByPk(req.params.id); // ALTERA SOMENTE O QUE ESTA NO CODIGO

   cat.name = req.body.name;
   cat.description = req.body.description;
   cat.save();

   res.send(cat); */

   await Category.update(req.body, {  //GENERALIZADO, ALTERA O QUE MANDAR ALTERAR 
      where: {
         id: req.params.id
      }
   });

   res.send(req.body);

 })

module.exports = router;