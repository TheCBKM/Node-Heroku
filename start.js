const app = module.exports = require('express')();
const routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
function run() {
    mongoose.connect('mongodb+srv://cbkm:rj2020m@shopping-c1evz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected to mongo")
    });
    app.get('/get', (req, res) => {
        res.json('Hello')
    })
    app.use('/', routes);

    app.listen(3000||process.env.PORT);
}


module.exports = run;
if (require.main === module) {
//   handleAsyncExceptions();
  run();
}