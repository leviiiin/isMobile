'use strict';

const mobMenu = document.getElementById('mobileMenu');
const popup = document.getElementById('appPopup');

function isMobile() {
    if (navigator.userAgent.match(/Android|Mobile|IEMobile|Opera Mini|iPhone|iPad|iPod/i)==null) {
        popup.classList.remove('display-none')
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
