const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
    postedBy: String,
    PostedByID: String,
    content: String
})

const commentSchema = new Schema ({
    postedBy: String,
    PostedByID: String,
    content: String,
    replies: [replySchema]
})

const articleSchema = new Schema ({
    title: String,
    urlToImage: String,
    description: {type: String, default: "None Provided"},
    url: String,
    author: {type: String, default: 'Not Listed, See Source Link'},
    content: {type: String, default: 'Not Listed, See Source Link'},
    sourceName: {type: String, default: 'Not Listed, See Source Link'},
    comments: [commentSchema],
    publishedAt: {type: Date, default: '0000-00-00T00:00:00Z'}
})

module.exports = mongoose.model('Article', articleSchema)