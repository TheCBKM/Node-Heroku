const app = module.exports = require('express')();

var jwt = require('jsonwebtoken');

let auth = (req, res, next) => {
    let token = req.headers['token'];
    console.log(req.header)
    if (token) {
        req.token = token;
        next()
    }
    else {
        res.json({ data: "auth faild" });
    }
}
module.exports = auth;