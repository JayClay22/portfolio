function alertMe() {
    alert('Your form has been Submitted!')
}
function submitContactForm() {
    alert('Thank you for submitting the form')
}
$(document).ready(function () {

    $('#contactForm').on('submit', submitContactform);

});

function submitContactform() {
    event.preventDefault();
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        $(this).fadeOut();
        $("#success").fadeIn();
        //alert('Thank you for submitting the form');
       }
}