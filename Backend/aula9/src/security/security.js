const User = require('../entity/User')
const jwt = require('jsonwebtoken');

const secret = "secret"

async function tokenIsValid(req) {
    /*  if(req.headers.token === 'fs13') {
           return true;
        }
        return false; */
  
      /*   return req.headers.token === 'fs13'; */
  
   /*      let tokens = [
           'jordana',
           'nielly',
        ] */

           /*      return tokens.includes(req.headers.token); */
  
        let user = await User.findAll({
         where: {
            token: req.headers.token
         }
        });

        if(user.length === 0) {
         return false;
        }

        return user;
       
     }
  


     function errorToken(res){
        res.status(401).send({
           error: 'Sem permissão'
        });
     }
     


     async function validSecurity(req, res, next){
        if(! await tokenIsValid(req)) {
           errorToken(res);
            return;
         }
  
         next();
     }


     async function generateJwt(req, res, next) {
       let user = await User.findOne({
         where: {
            email: req.body.email || null
         }
       })

       if(!user.length){
         errorToken(res)
         return
       }

       const token = await jwt.sign({
         user_id: user.id
       }, secret)

       req.token = token

       next()
     }


     module.exports = {
        validSecurity,
        generateJwt
     };