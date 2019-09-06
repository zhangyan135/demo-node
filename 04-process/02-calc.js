console.log(process.argv.length);
console.log(process.argv);

var fn=process.argv[2];
console.log(fn,'=',eval(fn));
const msg=['name','email','QQ'];
var usr={},i=0;
console.log(msg[i]+':');
process.stdin.on('data',function(data){
  usr[msg[i]]=data.slice(0,data.length-1).toString('utf8');
  console.log(msg[++i]+':');
});
process.stdin.on('end',function(data){

});
