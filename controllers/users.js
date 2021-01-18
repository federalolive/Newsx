const User = require("../models/user");

module.exports = {
  index,
  populateUserCollection,
  removeArticleFromCollection,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function populateUserCollection(req, res){
  User.findById(req.user._id)
  .populate('articleCollection')
  .then((user)=>{
    console.log(user.articleCollection)
      res.json(user.articleCollection)
    })
}

function removeArticleFromCollection(req, res){
  User.findById(req.user._id)
  .then((user)=>{
    // user.articleCollection = user.articleCollection.filter(article => article._id !== req.params.id)
    let idx = user.articleCollection.findIndex((a)=>a._id === req.params.id)
    user.articleCollection.splice(idx, 1)
    user.save()
    console.log(user)
  })
  .then((user)=>{
    res.json(user)
  })
}
