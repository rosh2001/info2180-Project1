/* Add your JavaScript to this file */
window.onload= ()=>{
    let subscribeBtn = document.querySelector("section.newsletter form button.btn");
    let emailField = document.querySelector("section.newsletter form input[type=\"email\"]");
    emailField.setAttribute("placeholder", "Email address");
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let msgBox = document.querySelector("section.newsletter div.message");
    subscribeBtn.onclick = (event)=>{
        event.preventDefault();
        if (emailField.value.length != 0 && emailRegex.test(emailField.value.toLowerCase())){
            msgBox.innerHTML = `Thank you! Your email address ${emailField.value} has been added to our mailing list!`;
        }
        else{
            msgBox.innerHTML = "Please enter a valid email address."
        }
    }
}