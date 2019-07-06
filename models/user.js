const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique:true
    },
    pass: {
        required: true,
        type: String
    }
})

userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'iamparag')

    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'cbkmcbkm', function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

module.exports = mongoose.model('user', userSchema);