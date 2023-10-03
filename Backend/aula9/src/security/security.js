function tokenIsValid(req) {
    /*  if(req.headers.token === 'fs13') {
           return true;
        }
        return false; */
  
      /*   return req.headers.token === 'fs13'; */
  
        let tokens = [
           'jordana',
           'nielly',
        ]
  
        return tokens.includes(req.headers.token);
       
     }
  
     function errorToken(res){
        res.status(401).send({
           error: 'Sem permissão'
        });
     }
  
     function validSecurity(req, res, next){
        if(!tokenIsValid(req)) {
           errorToken(res);
            return;
         }
  
         next();
     }

     module.exports = {
        validSecurity,
     };