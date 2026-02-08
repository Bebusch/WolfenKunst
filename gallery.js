/* gallery.js */

const products = [
    {
        img: "images/uc1.jpg",
        title: "URBAN PLATEAU",
        category: "uc",
        material: "Hochleistungsbeton, handversiegelt",
        dimensions: "120 x 60 x 40 cm",
        weight: "45 kg",
        desc: "Massive Präsenz in ihrer flachsten Form – eine weitläufige Bühne aus rohem Beton für dein urbanes Interieur."
    },
    
    {
        img: "images/uc2.jpg", // Pfad zu deinem Bild anpassen
        title: "URBAN SLATE",
        category: "uc",
        material: "Hochleistungsbeton, faserverstärkt",
        dimensions: "100 x 25 x 5 cm",
        weight: "12 kg",
        desc: "Ein architektonisches Statement für die Wand. URBAN SLATE vereint die brachiale Schwere des Betons mit einer minimalistischen, schwebenden Montage."
    },
        {
        img: "images/ul1.jpg",
        title: "URBAN PILLAR",
        category: "ul",
        material: "Beton & Bewehrungsstahl",
        dimensions: "ca. 20 x 20 x 100 cm",
        weight: "ca. 18 kg",
        desc: "Massiver Beton trifft auf sichtbaren Stahl. Diese handgefertigte Stehleuchte verbindet archaische Materialien mit modernem Lichtdesign und setzt ein kraftvolles, urbanes Statement im Raum."
    },
    {
        img: "images/us1.jpg", // Pfad zu deinem Bild anpassen
        title: "URBAN RISE",
        category: "us",
        material: "Beton",
        dimensions: "10 x 10 x 15 cm",
        weight: "1 kg",
        desc: "Klare Linien, starke Präsenz. Dieser handgefertigte Kerzenhalter aus Beton inszeniert hohe Kerzen als architektonisches Element und verbindet ruhige Massivität mit warmer, atmosphärischer Lichtwirkung."
    },
    {
        img: "images/us2.jpg", // Pfad zu deinem Bild anpassen
        title: "URBAN BLOCK",
        category: "us",
        material: "Hochleistungsbeton, faserverstärkt",
        dimensions: "8 x 8 x 5 cm",
        weight: "0,2 kg",
        desc: "Kompakte Geometrie, maximale Struktur. Dieser massive Betonblock dient als minimalistisches Dekorationsobjekt für dein Zuhause."    },    
    {
        img: "images/ul2.jpg",
        title: "URBAN GLOW",
        category: "ul",
        material: "Stahlbeton, Messing-Finish",
        dimensions: "15 x 15 x 35 cm",
        weight: "4.2 kg",
        desc: "Roher Beton im Dialog mit warmem Licht. Diese handgefertigte Tischleuchte vereint industrielle Härte mit atmosphärischer Eleganz."
    }
    // Hier kannst du weitere Produkte nach dem gleichen Muster einfügen
];

let filteredProducts = [...products];
let currentIndex = 0;
let isScrolling = false;

const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");

// 1. Galerie Generieren
function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    filteredProducts = filter === 'all' ? [...products] : products.filter(p => p.category === filter);

    filteredProducts.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <div class="item-overlay"><span>${product.title}</span></div>
        `;
        item.onclick = () => openLightbox(index);
        galleryGrid.appendChild(item);
    });
}

// 2. Filter-Events (Optimiert)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Nutze currentTarget statt target, um sicherzugehen, dass wir den Button erwischen
        const clickedBtn = e.currentTarget; 
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        clickedBtn.classList.add('active');
        
        renderGallery(clickedBtn.getAttribute('data-filter'));
    });
});

// 3. Lightbox Funktionen
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function updateLightbox() {
    const product = filteredProducts[currentIndex];
    if (!product) return;

    lightboxImg.src = product.img;
    lightboxTitle.textContent = product.title;
    lightboxDesc.textContent = product.desc;
    document.getElementById("spec-material").textContent = product.material;
    document.getElementById("spec-dimensions").textContent = product.dimensions;
    document.getElementById("spec-weight").textContent = product.weight;
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function changeItem(step) {
    if (isScrolling) return;
    lightboxImg.classList.add("fade-out");

    setTimeout(() => {
        currentIndex = (currentIndex + step + filteredProducts.length) % filteredProducts.length;
        updateLightbox();
        lightboxImg.classList.remove("fade-out");
    }, 300);
}

function nextItem(e) { if(e) e.stopPropagation(); changeItem(1); }
function prevItem(e) { if(e) e.stopPropagation(); changeItem(-1); }

// 4. Input Events (Tastatur & Mausrad)
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
});

lightbox.addEventListener('wheel', (e) => {
    if (!lightbox.classList.contains("active") || isScrolling) return;
    
    if (e.deltaY > 0) nextItem();
    else prevItem();

    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 800);
    e.preventDefault();
}, { passive: false });

// Initialisierung
renderGallery();