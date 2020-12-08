'use strict';

const $ = function (foo) {return document.getElementById(foo); };
let a = $('myRange'); //slider

// bulb dimmer 
function inputChanged(e) {     
   let x = parseInt($('myRange').value);
   let opacity = x/100;   // html code min=0 max=100
   console.log(opacity);

   let rgb = 'rgb(225, 225, 0 ,'+opacity+')';
   let shadow = '0px 0px 55px 20px rgb(225 , 225 , 0 ,'+opacity+')';

   bulb.style.boxShadow = shadow;
   bulb.backgroundColor = rgb;
}
a.addEventListener('change', inputChanged);


// ON and OFF 
function light(value) {      // value input is in html code 1 and 0
   let pic;
    if(value == 0) {
       pic = 'imgs/bulbOFF.png';
       $('statusBar').innerHTML = 'Thank you!';        // status message when buttons are clicked
       $('bulb').style.boxShadow = '0px 0px 0px 0px';
       $('bulb').style.backgroundColor = 'white';

    } else {
       pic = 'imgs/bulbON.png';
       $('statusBar').innerHTML = 'Please turn off the light';
       $('bulb').style.boxShadow = '0px 0px 55px 20px rgb(255,215,0)';
       $('bulb').style.backgroundColor = 'rgb(255,215,0, 0.72)';

       setTimeout (function () {
         $('bulb').style.boxShadow = '0px 0px 0px 0px';   // this will turn off the yellow background in 7 seconds
         $('bulb').style.backgroundColor = 'white';
      }, 8000); 

    }
    $('bulb').src = pic;
}
