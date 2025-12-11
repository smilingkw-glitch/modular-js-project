document.getElementById("login-btn").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user found. Please Signup first.");
        return;
    }

    if (email === user.email && password === user.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials");
    }
});
