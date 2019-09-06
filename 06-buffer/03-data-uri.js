const log=console.log;
fs=require('fs');
http=require('http');
var data=fs.readFileSync('./qr-code.jpg').toString('base64');
log(data);
var html=
http.createServer((req,res)=>{

}).listen(8080);


