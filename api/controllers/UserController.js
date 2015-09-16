/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },

  create: function (req, res) {

    if(req.method=='POST'&&req.param('User',null)!=null){

      User.create(req.param('User')).done(function(err){

      if (err) {
        res.send('Error user wasn\'t created');

      }else {
        res.send('Successfully Created!');

      }

    })}else{
      res.render( 'user/create');
    }

  },

  index: function (req, res) {


    User.find().populateAll().exec(function(err, users) {

      res.render( 'user/index',{'users':users});
      return;
    });
  },

};

