// Redirige a login si no hay sesión activa
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn');

    const currentPage = window.location.pathname;

    if (currentPage.includes('tramites.html') && isLoggedIn !== 'true') {
        window.location.href = 'login.html';
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí podrías agregar validaciones más complejas
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'tramites.html';
        });
    }
});
