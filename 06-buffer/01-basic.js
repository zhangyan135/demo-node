const log=console.log;
var buff1=new Buffer[256];
buff1[0]=0x11;
log('buff1 length:',buff1.length);
log('buff1:',buff1);

var buff2=buff1.slice(250,256);
log('buff2',buff2);
log('buff2',buff2.toJSON());
log('buff2',JSON.stringify(buff2));
for(var i=0;i<buff1.length;i++){
  buff1[i]=i;
  log.('buff2',buff2);
}
buff1.fill(0,0,256);

var arr=['a',0xba,0xdf,0x00,255,10];
var buf3=new Buffer[arr];
log('buf3',buf3);

var buf4=new Buffer('hello world');
log('buf4',buf4);

buf4.copy(buf3,0,0,buf3.length);
log('buf3',buf3);

var str='你好 zhangyan';
var buf5=new Buffer(str);
log('buf5 length',buf5.length);
log('string length',str.length);
