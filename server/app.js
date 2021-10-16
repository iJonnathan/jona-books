const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors');
//middelware to authentification
const passport = require('passport'); 
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const config = require('config');

//require('./auth/auth');


const port = config.get('jonaBooks.serverConfig.port')
const baseUrl = config.get('jonaBooks.serverConfig.baseUrl')


//var authRouter = require('./routes/auth');
var services = require('./routes/services')



// create our express app
const app = express()
app.use(cookieParser())
app.use(helmet())
app.use(express.json());app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

//app.use(baseUrl + '/auth', authRouter);
app.use(baseUrl , services)
//app.use(baseUrl + '/', hi)

// app.get(baseUrl+'/',(req, res, next)=>{
    
//       res.status(200).send("books")


// })

app.get('/init', (req, res) => {
  
    res.send({msj:"this is jonabooks-server"})
  
})
module.exports = app


app.listen(process.env.PORT || port, () => {
    console.log("listeniing at port: "+port)
    console.log(baseUrl)
});