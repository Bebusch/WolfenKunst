document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.statement-content');
    const bars = document.querySelectorAll('.nav-bar');
    const slideInterval = 10000; // 10 Sekunden

    window.goToSlide = function(index) {
        // Alle Slides zurücksetzen
        slides.forEach((slide) => {
            slide.classList.remove('active', 'exit');
        });
        bars.forEach(bar => bar.classList.remove('active'));

        // Alte Slide rauswerfen (optional für Animation)
        slides[currentSlide].classList.add('exit');

        // Neue Slide aktivieren
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        bars[currentSlide].classList.add('active');

        // Timer neu starten
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    };

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        window.goToSlide(next);
    }

    // Ersten Durchlauf starten
    let autoSlide = setInterval(nextSlide, slideInterval);
});