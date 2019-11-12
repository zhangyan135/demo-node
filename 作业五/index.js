const express = require('express'),
      bodyParser = require('body-parser')
      fs = require('fs'),
      {users,chapterList} = require('./data'),
      app = express();//利用express模块创建一个对象

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/login.html');
});
app.get('login_bg.jpg',(req,res)=>{
  res.sendFile(__dirname+'/logo_bg.jpg');   
});
app.get('/list/',(req,res)=>{
    res.sendFile(__dirname+'/list.html');   
});
app.post('/login/',(req,res)=>{
  console.log(req.body.un,users[0].username);
  console.log(req.body.pwd,users[0].password);
  if(req.body.un === users[0].username && req.body.pwd === users[0].password){
    res.sendFile(__dirname+'/list.html');
  }else if(req.body.un === '' && req.body.pwd !== ''){
    res.end('plase enter account!!!')
  }else if(req.body.pwd === '' && req.body.un !== ''){
    res.end('plase enter password!!!')
  }else if(req.body.un === '' && req.body.pwd === ''){
    res.end('plase enter account and password!!!')
  }else{
    res.end('account or password is wrong!!!')
  }
})

app.listen('8080');