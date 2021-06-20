// Back-to-Top button script //

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
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


// sign up form
var signup = document.getElementById("pride-signup")

var signupBtn = document.getElementById("pride-btn")

var closeSignup = document.getElementById("close-btn")


// When the user clicks the button, open the sign up form
signupBtn.onclick = function() {
  signup.style.display = "block";
}

// When the user clicks on the close button the sign up form, close it
closeSignup.onclick = function() {
    signup.style.display = "none";
}


// When the user clicks anywhere outside of the sign up form, close it (no working now)
window.onclick = function(event) {
  if (event.target == this.signup) {
    this.signup.style.display = "none";
  }
}