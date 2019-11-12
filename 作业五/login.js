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
　　if(req.body.username===item.users[0].username&&req.body.password===item.users[0].password) {
     res.render('list');
　　}else{
　　　　res.send( 404 );
}
});
app.use(cookieParser());
app.get('/list', (req, res) => {
    var title1=item.chapterList[0].title;
    var lists=[
        {title:title1,views:'item.charpterList[0].views'}
    ]
     res.render('list',{ title: 'Express' ,data:lists});
     console.log(lists);
//   console.log('cookie:', req.cookies);

//   res.cookie('name', 'wangding', {maxAge: 100000, httpOnly: true});
//   res.cookie('age', 41, {maxAge: 100000});
// res.send('ok');
//  console.log(res);
});
app.listen(8080)