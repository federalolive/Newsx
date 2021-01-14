const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articles');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;