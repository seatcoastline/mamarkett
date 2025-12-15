// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        localStorage.setItem("login", "true");
        window.location.href = "index.html";
    });
}

// CEK LOGIN
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("login") !== "true") {
        alert("Silakan login terlebih dahulu");
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("login");
    alert("Anda telah logout");
    window.location.href = "login.html";
}
