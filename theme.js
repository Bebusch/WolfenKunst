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