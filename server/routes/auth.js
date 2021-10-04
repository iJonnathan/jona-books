// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const fs = require('fs'); 
// const crypto = require('crypto');
// const router = express.Router();
// const hash = crypto.createHash('sha256');
// const config = require('config')
// const securityConfig = config.get('jonaBooks.securityConfig')
// const privateKeyPath = securityConfig.privateKeyFile
// var privateKey = ''
// if( process.env.NODE_ENV == 'production' ){
//   privateKey = fs.readFileSync(privateKeyPath);
// } else {
//   privateKey = fs.readFileSync(require('path').resolve(__dirname, privateKeyPath));
// }

// router.post('/login', async (req, res, next) => {
//   passport.authenticate('login', async (err, user, info) => {     
//     try {
//       if(err || !user){
//         return next(err);
//       }
//       req.login(user, { session : false }, async (error) => {
//         if( error ) return next(error)
//         const body = { _id : user.user_id,_alias:user.user_alias, _role:user.user_role};
//         const token = jwt.sign({ user : body },privateKey,{ algorithm: 'RS256', expiresIn: '90d' });
//         const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 12);
//         console.log("      .. . . "+expiryDate)
//         return res.send({ 'accesstoken':token });
//       });
//     } catch (error) {
//       return next(error);
//     }
//   })(req, res, next);
// });

// module.exports = router;