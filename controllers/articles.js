const axios = require('axios')
const Article = require('../models/article')
const User = require('../models/user')

module.exports = {
    search,
    create,
    getTopNews,
    getArticle,
    addComment,

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
    await axios.get (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`) 
    .then ((articles) => {
        res.json(articles.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function getArticle(req, res){
    Article.findById(req.params.id)
    .then((article)=>{
        res.json(article)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function addComment(req, res){
    Article.findById(req.params.id)
    .then((article)=>{
        article.comments.push(req.body.formData)
        article.save()
        res.json(article)
    })
    .catch((err)=>{
        console.log(err)
    })
}




