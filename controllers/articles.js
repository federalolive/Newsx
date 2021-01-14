const Article = require('../models/article')

module.exports = {
    // slated functions
}


// have a function here that deals with the axios,get function, which take sthe form query and uses tempalte literals to append into our api url which will passed through 

// create function, which takes req.body data from search results in Article Cards, push it to UserCollection



// API CALLS


// Top News Of The Day in US (can make global), most recent first, returns 5 articles
// https://newsapi.org/v2/top-headlines?country=us&apiKey={APIKEY}&pageSize=5


// seraching entire API with q as query parameters, can include spaces, seraches the title as well as the content
// https://newsapi.org/v2/everything?q=2021 election unrest usa&apiKey={APIKEY}&pageSize=20

// can add relevancy, popularity, publishedAt to api call to set sort order of results

// Api endpoints breakdown 
// https://newsapi.org/docs/endpoints/everything



