const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    Title: {
        required: true,
        type: String,
        unique: true
    },
    text: {
        required: true,
        type: String
    },
    by: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true,
    },
    likecount: {
        type: Number
    },
    likers: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true,
        }
    ],
    hatecount: {
        type: Number
    },
    haters: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true,
        }
    ]
});
module.exports = mongoose.model('blog', blogSchema);