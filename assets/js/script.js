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

$(function() {
 // When the user clicks the button, open the sign up form
    $(".pride-btn").click(function(){
        $("#pride-signup").show();
    });
// When the user clicks on the close button the sign up form, close it
    $("#close-btn").click(function(){
        $("#pride-signup").hide();
    });
})


// When the user clicks anywhere outside of the sign up form, close it (no working now)
window.onclick = function(event) {
  if (event.target == this.signup) {
    this.signup.style.display = "none";
  }
}