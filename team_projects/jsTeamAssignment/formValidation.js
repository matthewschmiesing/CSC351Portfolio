document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("orderForm").addEventListener("submit", function(event) {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let creditNumber = document.getElementById("credit").value;
    let address = document.getElementById("address").value;
    let validated = true;
    //let filledOut = true;

    // Check if all fields are filled
    if (firstName == "" || lastName == "" || email == "" || creditNumber == "" || address == "") {
        console.log(firstName)
        alert("All fields must be filled out");//uses basic alert
        validated = false;
    } 

    // Email validation, the current HTML set up already takes of this but for the sake of the assignment here it is
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid Email");//uses basic alert
        validated = false;
    }


    // Prevent form submission if validation fails
    if (!validated) {
        event.preventDefault(); 
    }
});
})