document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField=document.getElementById('email-field');
    const emailInput = emailField.value;
    emailField.value = emailInput;
    const passWordField = document.getElementById('password-field');
    const passwordInput = passWordField.value;
    passWordField.value = passwordInput;
    if(emailInput == 'email' && passwordInput == 'password'){
        window.location.href = 'acc-balance.html'
    }
    else{
        alert('hey, you are not authorized.')
    }

})