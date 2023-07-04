// Script to open and close sidebar
function _open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function _close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  // Emailing Service
  function sendMail() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var params = {
      from_name: fullName,
      email: email,
      message: message
    };

    emailjs.send("service_wig22jb", "template_z58f01r", params)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      }, function (error) {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  }
 