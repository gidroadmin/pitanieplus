$(function () {
    $('.menuToggle').on('click', function () {

        $('.site-navigation').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });

    });
})

// $(function(){
//     $('.left-menu-Toggle').on('click', function(){

//         $('.left-nav').slideToggle(300, function(){
//             if($(this).css('display') === 'none'){
//                 $(this).removeAttr('style');
//             }
//         });

//     });
// })

// $(function () {
//     $('.img-search').on('click', function () {

//         $('.search').slideToggle(300, function () {
//             if ($(this).css('display') === 'none') {
//                 $(this).removeAttr('style');
//             }
//         });

//     });
// })

let header = document.querySelector('.header');
let container = document.querySelector('.container');
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add('header__scroll');
        container.classList.add('container_fixed');
    } else {
        header.classList.remove('header__scroll');
        container.classList.remove('container_fixed');
    }
}

let poiskForm = document.querySelector('.search-wrap');
let btn = document.querySelector('.img-search');
btn.onclick = function () {
    poiskForm.classList.toggle('visible2');
}

let menu1 = document.querySelector('.left-nav');
let body = document.querySelector('body');
let overlay = document.querySelector('.burger-menu__overlay');
let btnMenu = document.querySelector('.menu-icon');
btnMenu.onclick = function () {
    menu1.classList.toggle('left-nav__visible');
    body.classList.toggle('lock');
    //container.classList.toggle('container_move');
    overlay.classList.toggle('active');
    btnMenu.classList.toggle('menu-icon-active');
    if (header.style.position == "fixed") {
        header.classList.remove('header__scroll');

    } else {
        header.classList.add('header__scroll');

    }
    //header.classList.toggle('header__scroll');


}
