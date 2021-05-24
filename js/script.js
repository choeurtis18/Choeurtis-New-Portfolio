$(document).ready(function(){
    
    $("#introduction").load("./html/introduction.html"); 
    $("#hobbies").load("./html/hobbies.html"); 
    $("#project").load("./html/projects.html"); 
    $("#footer").load("./html/footer.html"); 
    
    window.onscroll = function() {
        stickyManagement();
        changeOptionClass();
    };

    //Sticky the menu
    var navbar = $("#navbar");
    var introductionOffset = $("#introduction").offset(); //end menu position
    
    function stickyManagement() {
      if (window.pageYOffset >= introductionOffset.top) {
        navbar.addClass("sticky")
      } else {
        navbar.removeClass("sticky");
      }
    }

    var i = 0;
    function typeWriter() {
      var txt = 'Web Developer';
      var speed = 100;

      if (i < txt.length) { 
        $("#banner-text-subtitle").html($("#banner-text-subtitle").html() + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()

    function changeOptionClass() {
      var scroll = $(window).scrollTop();
      var studiesCardOffset = $("#studies-card").offset();
      var projectsarrowsOffset = $("#projects-arrows").offset();

      if (scroll >= studiesCardOffset.top) {
        $("#navbar-project-btn").addClass("active");
        $("#navbar-home-btn").removeClass("active");
        $("#navbar-footer-btn").removeClass("active");
      }else {
        $("#navbar-project-btn").removeClass("active");
        $("#navbar-home-btn").addClass("active");
      }
      if(scroll >= projectsarrowsOffset.top) {
        $("#navbar-project-btn").removeClass("active");
        $("#navbar-footer-btn").addClass("active");
      }

    }

    $("#icon-moon-sun").click(function () {
      $("#introduction-section").toggleClass("dark");
      $("#project-section").toggleClass("dark");
      $("#footer-section").toggleClass("dark");
      $("body").toggleClass("dark");
      $("#navbar").toggleClass("darkMode");
    })
});