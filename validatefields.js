function validateName(nameId) {
    var name = document.getElementById(nameId).value;
    if (!name.replace(/\s/g, '').length) {
        document.getElementById(nameId).style.borderColor = "red";
        document.getElementById(nameId + "-error-text").innerHTML = "Please enter a name";
    } else {
        document.getElementById(nameId).style.borderColor = "black";
        document.getElementById(nameId + "-error-text").innerHTML = "";
    }
}

function validateEmail() {
    var email = document.getElementById("user-email").value;
    if (!email.includes("@")) {
        document.getElementById("user-email").style.borderColor = "red";
        document.getElementById("email-error-text").innerHTML = "Please enter a valid email address";
    } else {
        document.getElementById("user-email").style.borderColor = "black";
        document.getElementById("email-error-text").innerHTML = "";
    }
}

function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("fname").value;
    var email = document.getElementById("user-email").value;
    var select = document.getElementById("you-are").value;
    var msg = document.getElementById("msg").value;

    if (!fname.replace(/\s/g, '').length || !lname.replace(/\s/g, '').length || !email.includes("@") ||
        select == "none" || !msg.replace(/\s/g, '').length) {
        alert("ERROR: Form was not submitted. You did not fill out all required fields.")
    } else {
        alert("Form successfully submitted! Thanks for reaching out.")
    }
}