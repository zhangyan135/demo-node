#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;

function Radio(station){
  var self=this;
  for(var n in EventEmitter.prototype){
    this[n]=EventEmitter.prototype[n];
  }
  setTimeout(()=>{
    self.emit('play',station);
  },0);
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);

}


module.exports=Radio;

