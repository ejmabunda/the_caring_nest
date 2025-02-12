/* Stylesheets */
const main = require('../css/landing.scss');
const gallery = require('../css/gallery.scss');
const about = require('../css/about.scss');
const contact = require('../css/contact.scss');

/* Web components */
const header = require('../js/header');
const footer = require('../js/footer');

/* Mobile menu */
menu_toggle = document.querySelector('#menu-toggle');
menu_toggle.addEventListener('click', () => {
    document.querySelector('#links').classList.toggle('open');
});
