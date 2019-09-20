#!/usr/bin/node

const fs=require('fs'),
      file=process.argv[2]||__filename;
try{
const fid= fs.openSync(file,'r');

console.log(fs.readFileSync(fid).toString('utf8'));
fs.closeSync(fid);
}
catch(e){
  console.error(e.message);
  process.exit(1);
}
