const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    title: String,
    urlToImage: String,
    description: {type: String, default: "None Provided"},
    url: String,
    author: {type: String, default: 'Not Listed, See Source Link'},
    content: {type: String, default: 'Not Listed, See Source Link'},
    sourceName: {type: String, default: 'Not Listed, See Source Link'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    publishedAt: {type: Date}
})

module.exports = mongoose.model('Article', articleSchema)