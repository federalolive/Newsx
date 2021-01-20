const User = require("../models/user");

module.exports = {
  index,
  populateUserCollection,
  removeArticleFromCollection,
  updateProfile,
  getUpdatedUser,
  getCommenter,
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
    let idx = user.articleCollection.findIndex((a)=>a._id == req.params.id)
    user.articleCollection.splice(idx, 1)
    user.save()
    console.log(user)
  })
  .then((user)=>{
    res.json(user)
  })
}

function updateProfile(req, res){
  console.log('this is the update controller function')
  console.log(req.body)
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  .then((user)=>{
    console.log(user)
    res.json(user)
  })
}

function getUpdatedUser(req, res){
  User.findById(req.user._id)
  .then((user)=>{
    res.json(user)
  })
}

function getCommenter(req, res){
  User.findById(req.params.id)
  .then((user)=>{
    res.json(user)
  })
}