// Seleccionar elementos
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');

/**
 * Lógica:
 * El sitio empieza en Oscuro (Default).
 * La clase 'light-mode' activa el modo claro.
 */

function toggleTheme() {
    // Alternamos la clase 'light-mode'
    const isLightMode = body.classList.toggle('light-mode');
    
    // Cambiar icono: 
    // Si es Light Mode -> Mostramos Luna (para volver a oscuro)
    // Si es Dark Mode  -> Mostramos Sol (para ir a claro)
    icon.textContent = isLightMode ? '🌙' : '☀️';
    
    // Guardar en localStorage
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Si la preferencia guardada es 'light', activamos la clase
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.textContent = '🌙';
    } else {
        // Por defecto es dark, aseguramos que no tenga la clase
        body.classList.remove('light-mode');
        icon.textContent = '☀️';
    }
}

// Event Listeners
themeToggle.addEventListener('click', () => {
    // Animación de rotación simple
    themeToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => themeToggle.style.transform = 'rotate(0deg)', 300);
    
    toggleTheme();
});

// Cargar al inicio
loadTheme();