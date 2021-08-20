const express = require("express")

//const fileUpload = require('express-fileupload')
//const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const multer = require("multer")

// const firebase = require('firebase/app').default;
// require('firebase/auth');
// require('firebase/database');

const admin = require('firebase-admin')
var serviceAccount = require("./jonabooks_firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'jonabooks.appspot.com'
});
const bucket = admin.storage().bucket()
//const defaultBucketName = Object.keys(buckete);
//console.log("bukete: "+defaultBucketName)

//admin.initializeApp(firebaseConfig);
// admin.initializeApp({
//     credential: admin.credential.cert(""),
//     storageBucket: "jonabooks.appspot.com"
//   })

// Cloud storage

// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: true
  }))
const cors = require('cors');
app.use(cors());
//app.use(fileUpload())

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})
// multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'books_uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
//const upload = multer({storage: storage})
const upload = multer({
    storage: multer.memoryStorage()
})
//app.use(upload.any())
//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
});

app.get('/books', async function (req, res, next){
    const options = {
        destination: './books_uploads/1911 History of Vermilion County IL Vol-1a.pdf',
    };
    await bucket.file('1911 History of Vermilion County IL Vol-1a.pdf').download(options);
     //storage.bucket(bucketName).file(fileName).download(options);
     console.log("get_books_ok")


})
app.get('/books_info', async function (req, res, next){
    
    async function listFiles() {
        // Lists files in the bucket
        const [files] = await bucket.getFiles();
      
        console.log('Files:');
        files.forEach(file => {
          console.log(file.name);
          console.log(Object.keys(file));
        });
      }
      
      listFiles().catch(console.error);
    


})

function uploadFile(file){

    var filename = './books_uploads/1911 History of Vermilion County IL Vol-1a.pdf';
    bucket.upload(filename, {
        destination:"books/"+file.originalname,
    })
    return false

    // const blob = bucket.file(file.originalname)

    // const blobWriter = blob.createWriteStream({
    //     metadata: {
    //         contentType: file.mimetype
    //     }
    // })
    // blobWriter.on('error', (err) => {
    //     console.log(err)
    //     return false
    // })
    // blobWriter.on('finish', () => {
    //     return true
    // })
    // blobWriter.end(file.buffer)
}
app.post('/books', upload.any(), async (req, res, next)  => {
    if(!req.files) {
        res.status(400).send("Error: No files found")
    } else {
        await req.files.forEach(async file => {

            var val = await uploadFile(file)
            if(val) res.send({ status: false, message: 'No file uploaded'});
            else console.log("book "+file.originalname+" uploaded")
        });
        console.log("all books uploaded!")
        res.status(200).send("books uploaded!")
    }
    
    
});