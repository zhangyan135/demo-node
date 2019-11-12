var express = require('express');
var app = express();
var fs=require('fs');
var bodyParser = require('body-parser');
var item=require('./data.json');
var cookieParser = require('cookie-parser')

app.set('views', __dirname);
app.set( 'view engine', 'html' );
app.engine( 'html', require( 'ejs' ).__express );
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/login',function(req,res){
       res.render('login');
});
app.get('login_bg.jpg',(req,res)=>{
    res.sendFile(__dirname+'/logo_bg.jpg');   
  });
app.post('/login',function(req,res){
  var list=item.chapterList;
　　if(req.body.username===item.users[0].username&&req.body.password===item.users[0].password) {
    res.render('list',{list});
　　}else{
　　　　res.send( 404 );
}
});

app.get('/list', (req, res) => {
   var list=item.chapterList;   
     console.log(list[0]);
     res.render('list',{list});
});
app.listen(8080)