#!/usr/bin/node

const fs=require('fs'),
      file=process.argv[2]||__filename;
if(fs.existsSync(file)){
console.log(fs.readFileSync(file).toString('utf8'));
}
else{
  console.log('%s not exit!',file);
  process.exit(1);
}
