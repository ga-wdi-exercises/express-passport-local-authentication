// GET /
function home(req, res) {
  res.render('index', {currentUser: global.currentUser});
}

module.exports = {
  home: home
};
