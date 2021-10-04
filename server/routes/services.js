const express = require('express');
const hash = require('object-hash');

// Cloud storage
const admin = require('firebase-admin')
const serviceAccount = require("../jonabooks_firebasekey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'jonabooks.appspot.com'
});
const bucket = admin.storage().bucket()
const db = admin.firestore();

//const validator = require('express-validator');
//const books = require('../service/books')

const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()})
var router = express.Router();

router.get('/book', async function (req, res, next) {
    console.log(req.query.id)
    const [files] = await bucket.getFiles({ prefix: 'books/'+req.query.id, delimiter: '', });
    //console.log(files)
    var stream = files[0].createReadStream();
    res.writeHead(200, {"Content-Type": "application/pdf"});
    stream.on('data', function (data) {
        res.write(data);
    });
    stream.on('error', function (err) {
        console.log('error reading stream', err);
    });
    stream.on('end', function () {
        res.end();
    });
});


router.get('/books', async function (req, res, next) {
    console.log("reqbooks")
    db.collection('books').get()
    .then((collection) => {
      var books = {};
      collection.forEach((doc) => {
        //console.log(doc.id, '=>', doc.data());
        var book = doc.data()
        book.id = doc.id
        book.coverpath = ""
        books[doc.id] = book;
      });
      res.status(200).send(books)
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      res.send({ status: false, message: 'Error getting documents'});
    });
    
});


router.get('/coverbook', async function (req, res, next) {
    
    const [files] = await bucket.getFiles({ prefix: 'covers/'+req.query.id, delimiter: '', });

    var stream = files[0].createReadStream();
    res.writeHead(200, {'Content-Type': 'image/png' });
    stream.on('data', function (data) {
        res.write(data);
    });
    stream.on('error', function (err) {
        console.log('error reading stream', err);
    });
    stream.on('end', function () {
        res.end();
    });
    
});

router.post('/books', upload.any(), async function (req, res, next) {
    
    if(!req.files) {
        res.status(400).send("Error: No files found")
    } else {
        let promises = [];
        req.files.forEach((file, index) => {
            index = parseInt(index/2)
            var book ={
                name : req.body.name[index],
                author : req.body.author[index],
                category : req.body.category[index]
            }
            let key = hash(book);

            /*GENERO LA RUTA DEPENDIENDO SI ES PDF O IMAGEN*/
            var extension = file.mimetype.split('/')[1];
            var pathDestinyFile = extension=='pdf' ? "books/"+key: "covers/"+key
            
            const blob = bucket.file(pathDestinyFile)
        
            const promise = new Promise((resolve, reject) => {
                const blobWriter = blob.createWriteStream({metadata: {contentType: file.mimetype}});
                blobWriter.on('error', () => {
                    reject('error al subir archivo '+book.name);
                }).on('finish', async () => {
                    await db.collection('books').doc(key).set(book);
                    resolve(key);
                }).end(file.buffer);
            });
            promises.push(promise);  
        });
        Promise.all(promises).then(promises => {
            console.log("books uploaded")
            res.status(200).send("books uploaded!")
        }).catch(function(err) {
            console.log(err.message); // some coding error in handling happened
            res.send({ status: false, message: 'No books uploaded'});
        });
    }
});

router.delete('/books', async function (req, res, next) {
    await db.collection('books').doc(req.query.id).delete();
    await bucket.file("books/"+req.query.id).delete();
    await bucket.file("covers/"+req.query.id).delete();
    console.log("book deleted")
    res.status(200).send("book deleted!")   
});
router.get('/',(req,res,next)=>{

    res.status(200).send("bookadfs")

}
);
module.exports = router;