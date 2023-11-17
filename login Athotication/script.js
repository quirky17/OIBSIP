function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // For simplicity, hardcoding a username and password
    var validUsername = "user";
    var validPassword = "password";

    if (username === validUsername && password === validPassword) {
        // Successful login
        window.location.href = "secure-page.html";
    } else {
        // Display error message
        errorMessage.innerHTML = "Invalid username or password. Please try again.";
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var registrationMessage = document.getElementById("registrationMessage");

    // For simplicity, you might want to send this data to a server for registration
    registrationMessage.innerHTML = "Account created successfully!";
}

function restore() {
    var restoreUsername = document.getElementById("restoreUsername").value;
    var restoreMessage = document.getElementById("restoreMessage");

    // For simplicity, you might want to send a password reset email or use other recovery methods
    restoreMessage.innerHTML = "Password restoration instructions sent to your email.";
}
