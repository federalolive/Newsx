const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
    postedBy: String,
    postedByID: String,
    content: String
})

const commentSchema = new Schema ({
    postedBy: String,
    postedByID: String,
    content: String,
    replies: [replySchema]
})

module.exports= mongoose.model('Comment', commentSchema)