#!/usr/bin/node
/*const p=require('./02-export-var');
console.dir(module);
console.log(p);
*/

/*const circle=require('02-export-function');
console.log('r=10,circle area:%d',circle(10).area());
console.dir(module);*/

const circle=require('./02-export-object');
log=console.log;
log('r=10,circle diameter:',circle.area(10));
log('r=10,circle area:',circle.area(10));
console.dir(module);
