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
  User.find({})
  .then((users) => res.json(users));
}

function populateUserCollection(req, res){
  User.findById(req.user._id)
  .populate('articleCollection')
  .then((user)=>{
      res.json(user.articleCollection)
    })
  .catch((err)=>{
    console.log(err)
  })
}

function removeArticleFromCollection(req, res){
  User.findById(req.user._id)
  .then((user)=>{
    let idx = user.articleCollection.findIndex((a)=>a._id == req.params.id)
    user.articleCollection.splice(idx, 1)
    user.save()
    res.json(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}

function updateProfile(req, res){
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  .then((user)=>{
    res.json(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}

function getUpdatedUser(req, res){
  User.findById(req.user._id)
  .populate('articleCollection')
  .then((user)=>{
    res.json(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}

function getCommenter(req, res){
  User.findById(req.params.id)
  .then((user)=>{
    res.json(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}