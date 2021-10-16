const hash = require('object-hash');

// Cloud storage
const admin = require('firebase-admin')
const serviceAccount ={
    "type": "service_account",
    "project_id": "jonabooks",
    "private_key_id": "66bcb1868e2c97283f1c84c6ec120a1275280c2f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDX5FgeAfWSC+tD\nWVgqQLCFSgZp1ba4AL8Ak5GaiEqpWeoSnCoqkpXblYfw2zs+xFzRCgHDMHgeET+I\nFzM3AuTWR3/j2jXfLfFUZ4wT/ONegmobRfNQ3JP4HDq4+wKq59NCo1+dZSFMu35r\nGW7Yb+CujFy1U4VjpfK+871P6G650rtLflQKHRax7v1yshdnsQeHDm6tTzyZ9ap6\n43jqswmVAuke7+T8fhQbb5mlT3CnEa69GS7jdAX9CbxzQssghCYAVxHxbLdfErlX\nZYoLQpHR9FKRIria0QQ/+5I6AHAyNtjKV61zs7uoV8cVd0xkNrQF6MnM0BKu7gll\noDOPZdbBAgMBAAECggEAAQktvoPdVDh30MTWUVJU8yhFV2tYHn9qKzIXZe6ydJgK\nNqwf4DXlUj0i2+ofiWinjnpqwuTF/ESyWvRbytn0rAX8/Ocazgu8RYQEoYKg9YbO\nGcGLl4/oiw1kCfJ8yeIIWZit+RvoxDuZcXE2ZCNmCEyzYTc4cneGYTc7RtAyvQ7F\nuMYZ27vlVLvS+NnZJxHccQjp+lMk+8zs/pN90IoXEt3rGyAnDvTTjMywvMicSsGT\n6kx/wtE4/nhJwqxtLcBW+oIJ+fh4NF270DpNL2sL1j2n0sOH60A1+D/+o6/IhDn3\n/2sv1S/NHani7OXJfAFkW/NDU6WaXB7s+FxVpAzUIQKBgQD93zGXPWJRN8NGcmT0\nsTej50Ua3C/bfRzoWgk0k7KBKlymV0pMCfuzyt7wP9BLwQpg1tLCpC3dHjGYhPcI\nAq5IaPA2sCBfJTzCUFprrkcLCAcA2DRGTFcgN9ee1aqqYBPJYusYcgaX+zD+/Ho6\na4f5fiveb0BAQ6NInSSG3Hkd4QKBgQDZs6VlHmj71VhiMrYanOLKzlWrPiQoPrtu\nILHJCuZJecJ2rbCOmxFRYTyu8med+Pg7C82YYog/utGKpu7pOil/2oCBcGinbn2Q\nARcC4JSjKOFrd4es8Kt1J/ZzJZMdvzh14WAuswVnWGD6fqqD/Z30SI+NZh3QQKPm\n7JUUtD0U4QKBgDYargfsZhqnBq/py0g2yIPe0uRxjqV5WYLPRWz2GTHb5Fjy+3uP\nGRxtHOwYvXyXjG2s+sfOk5OvTqSRmdAUOi5mZuNQz+VXG0bSNyMBxlQ8hrmQWjut\nI1hTblmEcdXTmgPuV+oiyvLy7rM4/ZebuSPb1t+V2ByaDZ95FgLD0/AhAoGAPZHg\nOhwCpw6so4EiHZ63SZJXiknV4gfz7G6UuX46qRcll3kCESLsH+73QadPBM+QLOrm\np61eSV/luWgC87U+XWmHpJQNFSVbn6mfP3ISt55tOn6gwZmDdGvr+J7s36HgLv6h\nvDNnWNYW/2FpilDlJlyLNPtnfSl68WmBtExRZiECgYABRms2kCi9hlFM3l9LaqX2\nYZAjp/PTP90cn0O8t086ZQ+gy9BVIYyUCocHlPoCTQCLQFykR8hmzkcyh6MjPAx4\nwuuQXLrNyryER6wnbZleRCSUoGOevQ1U5O4f4h2fRkvwrKjPOvD78UFvWNBcCFLG\nPYqNJQ00nIjuNFGKBbtt4w==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-6zj24@jonabooks.iam.gserviceaccount.com",
    "client_id": "104535175354371472320",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6zj24%40jonabooks.iam.gserviceaccount.com"
  }
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'jonabooks.appspot.com'
});
const bucket = admin.storage().bucket()
const db = admin.firestore();
// Modules
var exports = module.exports = {}


exports.getBook = async function (req, res, next) {
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
}

exports.getBooks = async function (req, res, next) {
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
    
}
  

exports.getCoverBook = async function (req, res, next) {
    
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
    
}

exports.postBooks = async function (req, res, next) {
    
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
    
}

exports.deleteBook = async function (req, res, next) {
    
    await db.collection('books').doc(req.query.id).delete();
    await bucket.file("books/"+req.query.id).delete();
    await bucket.file("covers/"+req.query.id).delete();
    console.log("book deleted")
    res.status(200).send("book deleted!")
    
}
  
