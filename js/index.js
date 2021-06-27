//Go to top button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
// disable right click

window.addEventListener('contextmenu',()=> event.preventDefault());

//logic for amount calculation
initialAmt = document.querySelector("input[name='initial-amt']")
finalAmt  = document.querySelector("input[name='final-amt']")
 initialAmt.addEventListener('keyup', ()=>{

  var init_amt  =  initialAmt.value;
 
 

  if(init_amt!=""){

     
    finalAmt.value =   ((0.1*init_amt).toFixed(2)).toLocaleString();

  }

  else{
    finalAmt.value =  ""
  }
 


 });
 


 