const express = require("express")
const bodyParser = require("body-parser")
const multer = require("multer")
const hash = require('object-hash');
const admin = require('firebase-admin')
const serviceAccount = require("./jonabooks_firebasekey.json");

// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: true
}))
const cors = require('cors');
app.use(cors());

// Cloud storage
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'jonabooks.appspot.com'
});
const bucket = admin.storage().bucket()
const upload = multer({storage: multer.memoryStorage()})
const db = admin.firestore();


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

function uploadFile(file, index, body){
    var book ={
        name : body.name[index],
        author : body.author[index],
        category : body.category[index]
    }
    /*GENERO LA RUTA DEPENDIENDO SI ES PDF O IMAGEN*/
    var extension = file.mimetype.split('/')[1];
    var pathDestinyFile = extension=='pdf' ? "books/"+book.name: "covers/"+book.name
    
    const blob = bucket.file(pathDestinyFile)
    const blobWriter = blob.createWriteStream({metadata: {contentType: file.mimetype}});
    blobWriter.on('error', (err) => {
        console.log(err)
        return false
    })
    blobWriter.on('finish', async () => {
        let key = hash(book);
        await db.collection('books').doc(key).set(book);
        return true
    })
    blobWriter.end(file.buffer)
}
app.post('/books', upload.any(), async (req, res, next)  => {
    if(!req.files) {
        res.status(400).send("Error: No files found")
    } else {
        await req.files.forEach(async (file,index) => {

            var val = await uploadFile(file, parseInt(index/2), req.body)


            if(val) res.send({ status: false, message: 'No file uploaded'});
            else console.log("book "+file.originalname+" uploaded")
        });
        console.log("all books uploaded!")  
        res.status(200).send("books uploaded!")
    }
});

app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
});