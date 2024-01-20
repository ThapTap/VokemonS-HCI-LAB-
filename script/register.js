function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.getElementById('terms').checked;

    // Reset previous error messages
    clearErrors();

    // Validate username
    if (name.length == 0) {
        alert('Name cannot be null');
        return;
    }

    // Validate email
    if (email == 0) {
        alert('Email cannot be null');
        return;
    }

    if (email.endsWith(".com") == false) {
        alert('Invalid email address');
        return;
    }

    // Validate password format
    if (password.length == 0) {
        alert('Password cannot be null');
        return;
    }

    if (!isPasswordValid(password)) {
        alert('Password must contain both alphabet and number.');
        return;
    }


    // Validate confirm password
    if (confirmPassword == 0){
        alert('Please confirm your password first');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Validate gender
    if (gender == null) {
        alert('Please select a gender.');
        return;
    }

    // Validate terms and conditions
    if (!terms) {
        alert('Please agree to the terms and conditions.');
        return;
    }

    // If all validations pass, submit the form or perform further actions
    alert('Account registered successfully!');
}

function isPasswordValid(password) {
    // Check if the password contains at least one alphabet and one number
    var hasAlphabet = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            hasAlphabet = true;
        } else {
            hasNumber = true;
        }

        if (hasAlphabet && hasNumber) {
            return true;
        }
    }

    return false;
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.remove();
    });
}