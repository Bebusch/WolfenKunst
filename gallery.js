/* ============================================================
   WOLFENKUNST - GALLERY LOGIC
   ============================================================ */

const products = [
    {
        img: "images/uc1.jpg",
        title: "URBAN PLATEAU",
        category: "uc",
        pos: "20%",
        material: "Hochleistungsbeton, handversiegelt",
        dimensions: "120 x 60 x 40 cm",
        weight: "45 kg",
        desc: "Massive Präsenz in ihrer flachsten Form – eine weitläufige Bühne aus rohem Beton für dein urbanes Interieur."
    },    
    {
        img: "images/uc2.jpg",
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
        desc: "Massiver Beton trifft auf sichtbaren Stahl. Diese handgefertigte Stehleuchte verbindet archaische Materialien mit modernem Lichtdesign."
    },
    {
        img: "images/us1.jpg",
        title: "URBAN RISE",
        category: "us",
        material: "Beton",
        dimensions: "10 x 10 x 15 cm",
        weight: "1 kg",
        desc: "Klare Linien, starke Präsenz. Dieser handgefertigte Kerzenhalter aus Beton inszeniert hohe Kerzen als architektonisches Element."
    },
    {
        img: "images/us2.jpg",
        title: "URBAN BLOCK",
        category: "us",
        material: "Hochleistungsbeton, faserverstärkt",
        dimensions: "8 x 8 x 5 cm",
        weight: "0,2 kg",
        desc: "Kompakte Geometrie, maximale Struktur. Dieser massive Betonblock dient als minimalistisches Dekorationsobjekt für dein Zuhause."
    },    
    {
        img: "images/ul2.jpg",
        title: "URBAN GLOW",
        category: "ul",
        material: "Stahlbeton, Messing-Finish",
        dimensions: "15 x 15 x 35 cm",
        weight: "4.2 kg",
        desc: "Roher Beton im Dialog mit warmem Licht. Diese handgefertigte Tischleuchte vereint industrielle Härte mit atmosphärischer Eleganz."
    }
];

let filteredProducts = [...products];
let currentIndex = 0;

// 1. GALERIE RENDERN
function renderGallery(filter = 'all') {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';
    filteredProducts = products.filter(p => filter === 'all' || p.category === filter);

    filteredProducts.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Hier bauen wir das HTML inklusive des edlen Overlays
        item.innerHTML = `
            <img src="${product.img}" alt="${product.title}" style="object-position: ${product.pos || 'center'}">
            <div class="item-overlay"><span>${product.title}</span></div>
        `;

        item.onclick = () => openLightbox(index);
        grid.appendChild(item);
    });
}

// 2. LIGHTBOX LOGIK
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Scrollen verhindern
}

function updateLightbox() {
    const p = filteredProducts[currentIndex];
    lightboxImg.src = p.img;
    lightboxTitle.textContent = p.title;
    lightboxDesc.textContent = p.desc;
    
    // Falls du die Specs-Felder (Material etc.) in der HTML hast:
    if(document.getElementById('spec-material')) {
        document.getElementById('spec-material').textContent = p.material;
        document.getElementById('spec-dimensions').textContent = p.dimensions;
        document.getElementById('spec-weight').textContent = p.weight;
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Schließen bei Klick auf X oder außerhalb des Bildes
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'close-lightbox') {
            closeLightbox();
        }
    });
}

// 3. FILTER EVENT LISTENER
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.getAttribute('data-filter'));
        });
    });

    renderGallery('all'); // Initialer Start
});

// Tastatur-Steuerung für Lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % filteredProducts.length; updateLightbox(); }
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length; updateLightbox(); }
});