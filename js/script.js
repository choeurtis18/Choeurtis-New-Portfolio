$(document).ready(function(){
    
    $("#introduction").load("./html/introduction.html"); 
    $("#hobbies").load("./html/hobbies.html"); 
    $("#project").load("./html/projects.html"); 
    $("#footer").load("./html/footer.html"); 
    
    //Sticky the menu
    window.onscroll = function() {
        myFunction()
    };

    var navbar = $("#navbar");
    
    var navbarOffset = $("#introduction").offset(); //end menu position
    
    function myFunction() {
      if (window.pageYOffset >= navbarOffset.top) {
        navbar.addClass("sticky")
      } else {
        navbar.removeClass("sticky");
      }
    }
    //End Sticky the menu

    //Write animation
    var i = 0;
    var txt = 'Web Developer';
    var speed = 100;

    function typeWriter() {
      if (i < txt.length) { 
        $("#banner-text-subtitle").html($("#banner-text-subtitle").html() + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()
    
});