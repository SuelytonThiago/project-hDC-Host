function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src = "./img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src = "./img/close-menu.svg";
    }
}