'use strict';

function smill() {var hi= prompt("are you smille now  yes or no  ");
var ans;
while((hi!=="yes") && (hi!=="no")){
  var hi= prompt("are you smille now  yes or no  ")

}
if (hi=="yes") {
   ans= 'stay happy';
  } else {
  ans = 'please smile and you will be happy';}

  document.write('<h1>' +ans+ '</h1>');}

 function favouret() 
 { var fav= prompt("what fav is your favourtsport tennis-horseback riding-wimming??");
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

  function name(){var name2= prompt( "what is your name??");
  
    document.write( '<h1>'+'welcome'+name2 +'</h1>');    

  }
function smillIm(){ var nam= prompt( "what is  your favorite nummber??");
for (let i = 0; i < nam ; i++) {
  document.write('<img src="http://mynamepics.in/uploads/bf269880995eff6db663cf8788e0d258.jpg">');
 
  
}

}
  smill()  
  favouret()
  name()
  smillIm()


