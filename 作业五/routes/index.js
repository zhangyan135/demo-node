var express = require('express');
var router = express.Router();
var data=require('../data.json');
router.get('/', function(req, res) {
       res.render('index', { title: 'Express' });
   });
   
router.route('/login')
  .get(function(req, res) {
      res.render('login', { title: '用户登录' });
  })
  .post(function(req, res) {
      if (req.body.username === data.users.username && req.body.password === data.users.password) {
          req.session.user = user;
          res.redirect('/list');
      } else {
          req.session.error='用户名或密码不正确';
          res.redirect('/login');
      }
  }); 
  router.route('/list')
  .get(function(req,res){
    
  })
 
  module.exports = router;