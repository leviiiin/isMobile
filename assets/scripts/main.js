'use strict';

const mobMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('appPopup');

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) === window.navigator.userAgent) {
        popup.classList.remove('display-none')
    }
}
isMobile();

function popupClose() {
    popup.classList.add('display-none');
}

function mobileMenuOpen() {
    mobMenu.classList.remove('display-none');
}

function mobileMenuClose() {
    mobMenu.classList.add('display-none');
}

