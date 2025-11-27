const loginEmail = document.getElementById("email");
const loginPass = document.getElementById("password");
const loginBtn = document.getElementById("button");

loginBtn.addEventListener("click", function(e) {
    e.preventDefault()
  const email = loginEmail.value.trim();
  const password = loginPass.value.trim();

  // Ambil semua user dari localStorage
  const users = JSON.parse(localStorage.getItem("user")) || [];

  // Cek apakah email + password cocok
  const validUser = users.find(user =>
    user.email === email && user.password === password
  );

  if (!validUser) {
    alert("Email atau password salah!");
    return;
  }
  else{
     alert("Login berhasil!");
  }
  
  window.location.href = "home.html"; // redirect jika mau
});
