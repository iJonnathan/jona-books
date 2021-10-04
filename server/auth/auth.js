// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// //const Model = require('../db/models');
// const JWTstrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
// const fs = require('fs');
// //const errors = require('../utils/errors')

// const config = require('config')
// const securityConfig = config.get('jonaBooks.securityConfig')
// const publicKeyPath = securityConfig.publicKeyFile
// var publicKey = ''
// if( process.env.NODE_ENV == 'production' ){
//   publicKey = fs.readFileSync(publicKeyPath);
// } else {
//   publicKey = fs.readFileSync(require('path').resolve(__dirname, publicKeyPath));
// }


// passport.use('login', new localStrategy(
//   function(username, password, done) {
//     console.log(username)
//     // Model.User.findOne({where: {user_alias: username}}).then((user, err) => {
//     //   if (err) { return done(new errors.AuthError('ServerError')); }
//     //   if (!user) { return done(new errors.AuthError('InvalidCredentials'), false); }
//     //   if (!user.user_isactive) { return done(new errors.AuthError('InactiveUser'), false); }
//     //   if (!user.validatePassword(password)) { return done(new errors.AuthError('InvalidCredentials'), false); }
//     //   return done(null, user);
//     // });
//     return done(null, username);
//   }
// ));

// passport.use(new JWTstrategy({
//   secretOrKey : publicKey,
//   jwtFromRequest : ExtractJWT.fromAuthHeaderWithScheme('bearer')
// }, async (token, done) => {
//   try {
//     return done(null, token.user);
//   } catch (error) {
//     done(error);
//   }
// }));