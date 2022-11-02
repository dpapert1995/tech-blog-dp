// A helper to redirect unauthenticated users attempting to access a page to the login page
const authorize = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  module.exports = authorize;