const app = module.exports = require('express')();
const userServices = require('../services/userServices');
const userSchema = require('../models/user');
var jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
app.get('/list', (req, res) => {
    (async () => {
        try {
            var productPromise = await userServices.getUsers();
            res.json(productPromise);
        }
        catch (error) {
            res.json({ error })
        }
    })();
})
app.post('/save', (req, res) => {
    (async () => {
        var savePromise = await userServices.saveUser(user);
        res.json({savePromise})

    })();
});



app.post('/login', (req, res) => {
    (async () => {
        try {
            userSchema.findOne({ name: req.body.name }).exec((err, user) => {
                if (!user) return res.json({ loginSuccess: false, message: 'Auth failed, name not found' });
                else if (err) return res.json({ loginSuccess: false, message: 'Auth failed', err });
                if (user.pass === req.body.pass) {
                    var user = req.body
                    var token = jwt.sign({ user }, 'cbkmcbkm');
                    res.send({  loginSuccess: true,token });
                }
                else return res.json({ loginSuccess: false, message: 'Wrong password' })
            })


        } catch (error) {
            // commonUtil.logErrorAndSendResponse(res, error);
        }
    })();
})

app.get('/hello', (req, res) => {
    res.json({ data: "hello" })
})

module.exorts = app