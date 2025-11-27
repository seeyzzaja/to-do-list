const form = document.getElementById("form");
const namaa = document.getElementById("nama");
const emaill = document.getElementById("email");
const pww = document.getElementById("password");
const msg = document.getElementById("msg")

function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = namaa.value.trim();
    const email = emaill.value.trim();
    const password = pww.value.trim();

    // VALIDASI
    if (!nama || !email || !password) {
        return alert("Masukkan semua data!");
    }

    if (password.length < 8) {
        return alert("Password minimal 8 karakter!");
    }

    const dataBaru = { nama, email, password };

    // LOAD DATA LAMA
    let users = load("user");

    // JIKA BELUM ADA
    if (!users) {
        users = [];
    }

    // TAMBAHKAN DATA BARU
    users.push(dataBaru);

    // SIMPAN KEMBALI KE LOCALSTORAGE
    save("user", users);

    alert("Registrasi berhasil!");
    form.reset();
});
