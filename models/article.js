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
    headline: String,
    articleImage: {Type: String},
    description: {Type: String, default: 'None Provided'},
    articleUrl: String,
    author: {Type: String, default: 'Not Listed, See Source Link'},
    content: {Type: String, default: 'Not Listed, See Source Link'},
    organizationName: {Type: String, default: 'Not Listed, See Source Link'},
    comments: [commentSchema],
    datePublished: {Type: Date, default: '0000-00-00T00:00:00Z'}
})

module.exports = mongoose.model('Article', articleSchema)