var jwt = require('jsonwebtoken');

verify = (token) => {
    jwt.verify(req.token, 'cbkmcbkm', (err, decode) => {
        if (err) {
            return { verified: false }
        }
        else {
            res.json({ verified: false, data: decode })
        }
    })
}

module.exports=verify