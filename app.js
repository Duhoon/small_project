app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/main.html'));
//__dirname : It will resolve to your project folder.
    console.log(req)
});

router.get('/dumain.html', function (req, res) {
res.sendFile(path.join(__dirname + '/.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);