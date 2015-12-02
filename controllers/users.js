var passport = require("passport")

// GET /signup
function getSignup(request, response) {
}

// POST /signup
function postSignup(request, response) {
}

// GET /login
function getLogin(request, response) { 
}

// POST /login 
function postLogin(request, response) {
}

// GET /logout
function getLogout(request, response) {
}

// Restricted page
function secret(request, response){
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
}