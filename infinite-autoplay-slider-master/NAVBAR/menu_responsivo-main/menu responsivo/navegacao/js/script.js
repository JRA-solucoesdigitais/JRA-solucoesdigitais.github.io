function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./NAVBAR/menu_responsivo-main/menu responsivo/navegacao/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./NAVBAR/menu_responsivo-main/menu responsivo/navegacao/img/close_white_36dp.svg";
    }
}