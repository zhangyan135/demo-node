#!/usr/bin/node
const http=require('http');
http.createServer((req,res)=>{
  res.end("hello wprld!");
}).listen(8000);

