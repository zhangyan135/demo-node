#!usr/bin/node
function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }
  function circumferencr(){
    return 2*Math.PI*radius;
  }
  return {
    area:area,
    circumference:circumference
  }
}
console.dir(module);
moodule.export=circle;
