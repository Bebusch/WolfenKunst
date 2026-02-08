/* theme.js */
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const hour = new Date().getHours();
    
    // Nachtmodus von 18:00 bis 06:00 Uhr
    const isNight = (hour >= 18 || hour < 6);

    if (savedTheme === 'dark' || (!savedTheme && isNight)) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', applyTheme);

window.addEventListener('DOMContentLoaded', () => {
    // Prüfen, ob ein Anker in der URL ist (z.B. #moebel)
    const category = window.location.hash.substring(1); 
    
    if (category) {
        // Falls deine Filter-Funktion 'filterGallery' heißt:
        filterGallery(category);
        
        // Optional: Den aktiven Button auch optisch hervorheben
        const activeBtn = document.querySelector(`[onclick="filterGallery('${category}')"]`);
        if (activeBtn) {
            // Alle anderen Buttons zurücksetzen
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Diesen Button aktivieren
            activeBtn.classList.add('active');
        }
    }
});