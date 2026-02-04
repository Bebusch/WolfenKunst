const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".lightbox-close");

function openLightbox(item) {
    const img = item.querySelector("img");

    document.getElementById("lightbox-img").src = img.src;
    lightbox.querySelector("h3").textContent = item.dataset.name || "";
    lightbox.querySelector(".type").textContent = item.dataset.type || "";
    lightbox.querySelector(".desc").innerHTML = item.dataset.desc || "";

    lightbox.classList.add("show");
}

// X klicken
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

// Klick außerhalb schließt auch
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }
});
function filterGallery(category, button) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filter button");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    items.forEach(item => {
        if (category === "alle" || item.dataset.category === category) {
            item.style.display = "";   // ← WICHTIG
        } else {
            item.style.display = "none";
        }
    });
}