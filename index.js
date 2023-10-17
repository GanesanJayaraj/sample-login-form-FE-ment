console.log("Welcome to Doot");
let userLoginData = [
    {"email" : "jayaraj.asta", "password" : "Jayaraj@123"}
];

const submitBtn = document.getElementById("submitButton");

const emailId = document.getElementById("email");
const accPassword = document.getElementById("password");

emailId.addEventListener("change", ()=>{
    if(accPassword.value != "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})

accPassword.addEventListener("change", ()=>{
    if(emailId.value != "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})

submitBtn.addEventListener("click", (event)=>{
    
    console.log("emailID : ", emailId.value ,", password : ", accPassword.value)
    
    isAccountAvailable(emailId.value , accPassword.value);
    emailId.value = "";
    accPassword.value = "";
    event.preventDefault();
});
function isAccountAvailable(email, pass) {
    if(userLoginData.some(user=>user.email == email && user.password == pass)) {
        localStorage.setItem("loggedInUser" , email)
        window.location = "main.html"
    } else {
        alert("Failed to Login")
    }
}