'use strict';

const mobMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('appPopup');

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        popup.classList.remove('display-none')
        popup.classList.add('display-flex')
    } else {
        
    }
}
isMobile();

function popupClose() {
    popup.classList.remove('display-flex')
    popup.classList.add('display-none');
}

function mobileMenuOpen() {
    mobMenu.classList.remove('display-none');
}

function mobileMenuClose() {
    mobMenu.classList.add('display-none');
}
