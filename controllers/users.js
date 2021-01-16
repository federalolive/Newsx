const User = require("../models/user");

module.exports = {
  index,
  populateUserCollection,
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
