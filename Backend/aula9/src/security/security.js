const User = require('../entity/User')

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

     module.exports = {
        validSecurity,
     };