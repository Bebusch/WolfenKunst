/* gallery.js */
const products = [
    {
        img: "images/p8.jpg",
        title: "URBAN PLATEAU",
        desc: "Massive Präsenz in ihrer flachsten Form – eine weitläufige Bühne aus rohem Beton für dein urbanes Interieur."
    },
    {
        img: "images/p7.jpg",
        title: "URBAN GLOW",
        desc: "Roher Beton im Dialog mit warmem Licht. Diese handgefertigte Tischleuchte vereint industrielle Härte mit atmosphärischer Eleganz und setzt als massives Unikat ein klares Statement in jedem modernen Interior."
    }
    // Weitere Produkte hier einfügen...
];

let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function updateLightbox() {
    const product = products[currentIndex];
    lightboxImg.src = product.img;
    lightboxTitle.textContent = product.title;
    lightboxDesc.textContent = product.desc;
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

// Navigation und Events
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
});

function nextItem() { currentIndex = (currentIndex + 1) % products.length; updateLightbox(); }
function prevItem() { currentIndex = (currentIndex - 1 + products.length) % products.length; updateLightbox(); }