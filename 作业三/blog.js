/*
* @Author: lenovo
* @Date:   2019-09-19 08:26:48
* @Last Modified by:   lenovo
* @Last Modified time: 2019-09-19 09:10:39
*/
	var http = require('http');
	var fs = require('fs');
	var server = http.createServer();
	server.listen(8083, function(){
		 console.log('服务器正在端口号：8083上运行......');
	})
	server.on('request',function(req,res){
		var url = req.url;
		if(url ==='/list'){
			res.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile('./chapterList.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				res.end(data);
			});
		
		}else if(url==='/listmanager'){
     		 res.writeHead(200,{'Content-Type':'text/html'})
			 fs.readFile('./list.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				res.end(data);
			});
    	}else if(url==='/login'){
			res.writeHead(200,{'Content-Type':'text/html'});
			fs.readFile('./login.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				res.end(data);
			});
 		}else if(url==='/addChapter'){
      		res.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile('./addChapter.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				res.end(data);
			});
		}else if(url==='/detail?chapterId=4'){
			res.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile('./chapter.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				res.end(data);
			});
		}else if(req.url !== '/'){
		var urls = '.'+req.url;
		console.log(url);
        res.writeHead(200,{'Content-type':"text/css"});
        fs.readFile(urls,(err, data)=> {
            if (err) {
                console.log(err);
            }else{
                res.end(data);
            }
        });
    }
	});
	