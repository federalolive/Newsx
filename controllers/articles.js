const axios = require('axios')
const Article = require('../models/article')
const User = require('../models/user')

module.exports = {
    // slated functions]
    search,
    create,
    getTopNews,
    getArticle,
    addComment,

}

async function search(req, res){
    await axios.get(`https://newsapi.org/v2/everything?q=${req.params.id}&apiKey=${process.env.API_KEY}&pageSize=25`)
    .then(articles => res.json(articles.data))
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
                            console.log(user)
                        })
                })
        }
    })
    .then((article)=>{
        res.json(article)
    })
    .catch((err)=>{
        console.log(err)
    })
}

async function getTopNews (req, res) {
    console.log('this is the controller function')
    await axios.get (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`) 
    .then ((articles) => {
        console.log(articles)
        res.json(articles.data)})
}

function getArticle(req, res){
    Article.findById(req.params.id)
    .then((article)=>{
        res.json(article)
    })
}


function addComment(req, res){
    Article.findById(req.params.id)
    .then((article)=>{
        article.comments.push(req.body.formData)
        article.save()
    })
    .then((article)=>{
        res.json(article)
    })
}
// have a function here that deals with the axios,get function, which take sthe form query and uses tempalte literals to append into our api url which will passed through 

// create function, which takes req.body data from search results in Article Cards, push it to UserCollection

// Article.findById(req.params.id)
//     .then((article)=>{
        
//     })


// API CALLS


// Top News Of The Day in US (can make global), most recent first, returns 5 articles
// https://newsapi.org/v2/top-headlines?country=us&apiKey={APIKEY}&pageSize=5


// seraching entire API with q as query parameters, can include spaces, seraches the title as well as the content
// https://newsapi.org/v2/everything?q=2021 election unrest usa&apiKey={APIKEY}&pageSize=25

// can add relevancy, popularity, publishedAt to api call to set sort order of results

// Api endpoints breakdown 
// https://newsapi.org/docs/endpoints/everything



