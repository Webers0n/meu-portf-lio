// Botão do menu mobile
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

// Abrir menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

// Fechar menu ao clicar fora
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

// Fechar menu ao clicar no próprio menu
menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

// Navegação suave
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Fechar menu mobile após clicar
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('ativo');
    });
});
