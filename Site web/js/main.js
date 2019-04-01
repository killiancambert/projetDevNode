const mongoose = require('../../API Nodejs/db');

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function verification() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "test" && password == "test") {
        alert("Login successfully");
        window.location = "list.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("email ou mot de passe incorrect. Il vous reste " + attempt + " essais.");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function afficher() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else { 
        x.type = "password";
    }
}