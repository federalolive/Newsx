const axios = require('axios')
const Article = require('../models/article')
const User = require('../models/user')
const Comment = require('../models/comment')

module.exports = {
    search,
    create,
    getTopNews,
    getArticle,
    addComment,
    getComment,
    addReply

}

async function search(req, res){
    await axios.get(`https://newsapi.org/v2/everything?q=${req.params.id}&apiKey=${process.env.API_KEY}&pageSize=25`)
    .then(articles => res.json(articles.data))
    .catch(err => console.log(err))
}

function create(req, res){
    Article.findOne({url: req.body.url})
    .then((article)=>{
        if(article){
            User.findById(req.user._id)
            .then((user)=>{
                user.articleCollection.push(article._id)
                user.save()
            })
        } else {
            Article.create(req.body)
                .then((article)=>{
                    User.findById(req.user._id)
                        .then((user)=>{
                            user.articleCollection.push(article._id)
                            user.save()
                            res.json(article)
                        })
                })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

async function getTopNews (req, res) {
    await axios.get (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=4`) 
    .then ((articles) => {
        res.json(articles.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function getArticle(req, res){
    Article.findById(req.params.id)
    .populate('comments')
    .then((article)=>{
        res.json(article)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function addComment(req, res){
    Comment.create(req.body.formData)
    .then((comment)=>{
        Article.findById(req.params.id)
        .populate('comments')
        .then((article)=>{
            article.comments.push(comment._id)
            article.save()
            res.json(article)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function getComment(req, res){
    Comment.findById(req.params.id)
    .then((comment)=>{
        res.json(comment)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function addReply(req, res){
    Comment.findById(req.params.id)
    .then((comment)=>{
        comment.replies.push(req.body.formData)
        comment.save()
        res.json(comment)
    })
    .catch((err)=>{
        console.log(err)
    })
}