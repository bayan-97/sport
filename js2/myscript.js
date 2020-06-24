'use strict';
function smill() {var hi= prompt("are you smille now  yes or no  ");
var ans;
if (hi=="yes") {
   ans= 'stay happy';
  } else {
  ans = 'please smile and you will be happy';}

  document.write('<h1>' +ans+ '</h1>');}

function old() { var age= prompt("how old are you");
  var ag;
if (age<=18) {
   ag= 'hi pretty children';
  } else {
  ag= 'hi good parents';}
  document.write('<h1>' +ag+ '</h1>');}

 function favouret() 
 { var fav= prompt("what fav is your favourtsport??");
  var fava;
if (fav=="tennis") {
   fava= 'here can help you';
   document.write('<h1>' +fava+ '</h1>');
  } else if(fav=="horseback riding") { fava= 'here can help you';                                    
  document.write('<h1>' +fava+ '</h1>');
  ;}else if(fav=="swimming") { fava= 'here can help you';                                     
  document.write('<h1>' +fava+ '</h1>');
  ;}else{ fava="can you choose another sport "
  document.write('<h1>' +fava+ '</h1>');

  }}
  smill() 
  old() 
  favouret()

