const express = require('express')
const app = express()
const port = 3000

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/main.html'));
//__dirname : It will resolve to your project folder.
    console.log(req)
});

router.get('/duindex', function (req, res) {
res.sendFile(path.join(__dirname + '/views/kdh/index.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/dunottice', function (req, res) {
res.sendFile(path.join(__dirname + '/views/kdh/nottice.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/dusign', function (req, res) {
res.sendFile(path.join(__dirname + '/views/kdh/sign.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/dusignup', function (req, res) {
    console.log(req.query);
});

router.get('/dusignin', function (req, res) {
    res.send('Request parameters : '+req.query.email+', '+req.query.password)
    console.log(req.query);
//__dirname : It will resolve to your project folder.
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))