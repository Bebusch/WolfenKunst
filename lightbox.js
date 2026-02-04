const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

function openLightbox(item) {
    const img = item.querySelector("img");
    if (!img) return; // Sicherheitscheck
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
}

function closeLightbox() {
    lightbox.classList.remove("active");
}

// Close lightbox on click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
