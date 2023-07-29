// When someone clicks the mobile hamburger icon, toggle the menu open or closed

const hamburgerButton = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');



hamburgerButton.addEventListener('click', () => {

    // get data-visible attribute value
    const navIsVisible = nav.getAttribute('data-visible');

    if (navIsVisible === 'true') {
        nav.setAttribute('data-visible', 'false');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }
    else {
        nav.setAttribute('data-visible', 'true');
        hamburgerButton.setAttribute('aria-expanded', 'true');
    }
});