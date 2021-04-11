$(document).ready(function(){
    // Get the popup
    var popup = document.getElementById("myPopup");

    // Get the button that opens the popup
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the popup
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup 
    btn.onclick = function() {
    popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
    popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    

    Email.send({
        SecureToken:"20544b95-1924-4063-9d63-e26705539759",
        To : 'choeurking@gmail.com',
        From : "choeurking@gmail.com",
        Subject : "This is the subject",
        Body : "mail sent succsessfully"
    }).then(
      message => alert(message)
    );
    
});