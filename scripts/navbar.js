const menuButton = document.querySelector('.navbar-top-menu');
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

// INITIALIZING BUTTONS

menuButton.addEventListener('click', navbarFunction);