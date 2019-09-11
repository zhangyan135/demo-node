#!/usr/bin/node

const Radio=require('./05-radio');
const station={
  freq:'106.7',
  name:'music radio'
};
var radio=new Radio(station);
radio.on('play',(station)=>{
  console.log('"%s" Fm %s opened!',station.name,station.freq);
  console.log('llllll');
});
radio.on('stop',(station)=>{
  console.log('"%s" FM %s closed!',station.name,station.freq);
});
