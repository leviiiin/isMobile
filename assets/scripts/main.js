'use strict';

const mobMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('appPopup');

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    } else {
        popup.classList.add('display-none')
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
