const main = require('../css/landing.scss');

menu_toggle = document.querySelector('#menu-toggle');
menu_toggle.addEventListener('click', () => {
    document.querySelector('#links').classList.toggle('open');
});