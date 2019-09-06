function task(){
  var num=0;
  for(var i=0;i<1000;i++){
    for(var j=0;j<10000;j++){
      num+=i*j;
    }
  }
  return num;
}
console.log("Download");
var n=longTask();
console.log("Download");
console.log('n=%d',n);
