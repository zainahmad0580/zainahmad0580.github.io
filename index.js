var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');
var successMsg = document.getElementById('success-msg');

function validateName(){
    var name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = '*Name is required';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length == 0){
        emailError.innerHTML = '*Email is required';
        return false;
    }
    else if(!email.match(mailFormat)){
        emailError.innerHTML = '*Invalid email ';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    
    if(left > 0){
        msgError.innerHTML = left + ' more characters left'
        return false;
    }

    msgError.innerHTML = '';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = '*Please fix the error to submit the form';
        setTimeout(function(){submitError.style.display='none';}, 3000);
        return false;
    }else{
        successMsg.innerHTML = 'Form Submitted Successfully!';
        setTimeout(function(){successMsg.style.display='none';}, 5000);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        return true;
    }
}