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
  
    document.write( '<h1>'+'have agood day'+ "" + name2 +'</h1>');    

  }
function smillIm(){ var nam= prompt( "Which month is your birthday??");
for (let i = 0; i < nam ; i++) {
  document.write('<img src="https://i.pinimg.com/236x/83/ff/0f/83ff0f7e8a22dfc1edab983d7860301a--tie-pin-smiley-faces.jpg">');
 
  
}

}
  smill()  
  smillIm()
  name()
  favouret()

 


