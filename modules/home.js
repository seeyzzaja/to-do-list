function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");

    // span untuk teks
    const span = document.createElement("span");
    span.textContent = value;

    // tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => {
      const newValue = prompt("Edit tugas:", span.textContent);
      if (newValue !== null && newValue.trim() !== "") {
        span.textContent = newValue.trim();
      }
    };

    // tombol hapus
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();

    // susun elemen
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}

// Fetch Random Hadits Arbain
async function loadRandomHadits() {
  try {
    // Arbain ada 42 hadits, jadi ambil random nomor 1-42
    const randomNumber = Math.floor(Math.random() * 42) + 1;
    const res = await fetch(`https://api.myquran.com/v2/hadits/arbain/${randomNumber}`);
    const data = await res.json();

    const h = data.data;
    const container = document.getElementById("haditsContainer");
    container.innerHTML = "";

    // fallback agar tidak undefined
    const number = h?.number ?? "";
    const arab = h?.arab ?? "";
    const indo = h?.id ?? "";

    const div = document.createElement("div");
    div.className = "hadits-item";
    div.innerHTML = `<strong>${number} ${arab}</strong><br><em>${indo}</em>`;
    container.appendChild(div);
  } catch (err) {
    document.getElementById("haditsContainer").textContent = "Gagal memuat hadits.";
    console.error(err);
  }
}
