const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.get('/popusercollection', checkAuth, usersCtrl.populateUserCollection)
router.put('/update', checkAuth, usersCtrl.updateProfile)
router.put('/removearticle/:id', checkAuth, usersCtrl.removeArticleFromCollection)
router.get('/updateprofile', checkAuth, usersCtrl.getUpdatedUser)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
