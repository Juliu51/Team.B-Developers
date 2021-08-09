"use strict";

let over = document.querySelectorAll('.figureit');


function mouseOver() {

    let overlay = document.querySelectorAll('.item-img-overlay');

    console.log(overlay);
    
    let onmouseover = overlay.style.display = "block";
     
   
    
    // let i;

    //  for (i = 0; i < over.length; i++) {
    //      let overlay = document.querySelectorAll('.item-img-overlay');
    
    //     onmouseover = overlay.style.display = "block";
    // }
};
over.addEventListener('onmouseover', mouseOver());



mouseOver();



// function mouseOut() {

//     let mouseOut = document.getElementsByClassName("figureit").addEventListener("mouseout", mouseOut);

//     document.getElementsByClassName("item-img-overlay").style.display = "none";
// };


// figurelayover.onmouseover = function(event) {
//     let target = event.target;
//     target.style.background = 'pink';
  
//   };

