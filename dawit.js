
/*-----scroll to top-----*/

const goUp = document.getElementById("scrollUpIcon");

window.addEventListener('scroll', iconVisibility);

function iconVisibility() {
      if (window.scrollY > 400) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
  }

goUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
/*-----Contact form validation-----*/

var nameError = document.getElementById('name-Error');
var phoneError = document.getElementById('Phone-Error');
var emailError = document.getElementById('email-Error');
var messageError = document.getElementById('message-Error');
var submitError = document.getElementById('submit-Error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;

  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validatePhone(){
var phone = document.getElementById('contact-phone').value;

if(phone.length == 0){
  PhoneError.innerHTML = 'Phone is required';
  return false;

}
if(phone.length !== 10){
  phoneError.innerHTML = 'Phone Number Should Be 10 digits';
  return false;

}

phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}



function validateEmail(){
  var email = document.getElementById('contact-Email').value;
  
  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Iinvalid Email';
    return false;
  }
  
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }



  function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 40;
    var left = required - message.length;
    if(left > 0){
      messageError.innerHTML = left + ' more characters require';
      return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }



  function validateForm(){

    if(!validateName() || !validateForm() || !validatePhone() || !validateMessage()){
       submitError.innerHTML = "please check the required fields";
      return false;
    }

  }
  
