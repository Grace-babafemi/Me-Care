
document.querySelector("#loginContainer").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.getElementById("userName").value;
    const passwords = document.getElementById("userPassword").value;



    const storeUser = localStorage.getItem("userName");
    const storePasswords = localStorage.getItem("Password");



    if (user === storeUser && storePasswords) {
        alert("Login successfully;Redirecting to home page...");
        window.location.href = "signUp.html"
    } else {
        
    }alert("In correct details")
})