const menuButton = document.querySelector('.navbar-top-menu');
const navbarLinkItself = document.querySelectorAll('.navbar-middle-link');
let isNavbarOpen = false;

// NAVBAR FUNCTION

function navbarFunction() {
    if (isNavbarOpen === false) {
        menuButton.classList.add('navbar-top-menu-js');
        
        isNavbarOpen = true;
    } else {
        menuButton.classList.remove('navbar-top-menu-js');

        isNavbarOpen = false;
    };
};

// NAVBAR LINKS FUNCTION

for (let i = 0; i < navbarLinkItself.length; i++) {
    // MOUSELEAVE
    navbarLinkItself[i].addEventListener('mouseleave', () => {
        navbarLinkItself[i].classList.remove('navbar-middle-link-hover');
    });
    // MOUSEENTER
    navbarLinkItself[i].addEventListener('mouseenter', () => {
        if (!navbarLinkItself[i].classList.contains('navbar-middle-link-active')) {
            navbarLinkItself[i].classList.add('navbar-middle-link-hover');
        };
    });
};

// INITIALIZING BUTTONS

menuButton.addEventListener('click', navbarFunction);