'use strict';
// меню
window.addEventListener('DOMContentLoaded', function() {
    let closedMenuButton = document.querySelector('.header-nav__close'),
    mainHeader = document.querySelector('.header'),
    headerNavigation = document.querySelector('.header-nav'),
    openMenuButton = document.querySelector('.header__menuButton'),
    buttonsBlock = document.querySelector('.header__buttonsBlock'),
    bgHalf = document.querySelector('.main__wrapper-bg-half');
    function openMenu() {
        openMenuButton.addEventListener('click', () => {
            mainHeader.classList.remove('header');
            mainHeader.classList.add('header_open');
            headerNavigation.style.display = 'block';
            buttonsBlock.classList.add('visually-hidden');
            buttonsBlock.classList.remove('animate__zoomIn');
            bgHalf.classList.add('visually-hidden');
        });
    }
    openMenu();
    function closeMenu(){
        closedMenuButton.addEventListener('click', () =>{
            mainHeader.classList.remove('header_open');
            mainHeader.classList.add('header');
            headerNavigation.style.display = 'none';
            buttonsBlock.classList.remove('visually-hidden');
            buttonsBlock.classList.add('animate__zoomIn');
            bgHalf.classList.remove('visually-hidden');
        });
    }
    closeMenu();

//плавная прокрутка
function backTop(){
    const smoothLink = document.querySelector('.arter');
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.base').scrollIntoView({
            behavior: 'smooth',
                block: 'start'
            });
        });
}
backTop();

//кнопка возврата
function showBackButton(){
    const comebackButton = document.querySelector('.comebackButton');
    document.onscroll = function (){
    if (window.pageYOffset > 100) {
        comebackButton.classList.remove('visually-hidden');
    } else { comebackButton.classList.add('visually-hidden'); }};
}
showBackButton();
// анимация значка информации
const iconInf = document.querySelector(".icon-i");

function animationIconInfo(){
const one = document.querySelector(".icon-i__el1"),
two  = document.querySelector(".icon-i__el2"),
three = document.querySelector(".icon-i__el3");
if (one){
    iconInf.addEventListener('click', () => {
        iconInf.classList.toggle('icon-i_a');
        one.classList.toggle('icon-i__el1_a');
        two.classList.toggle('icon-i__el2_a');
        three.classList.toggle('icon-i__el3_a');
        })
}
;}
animationIconInfo();

let productProperties = document.querySelector(".product__properties");
function openInfo(){
    if (productProperties){
        iconInf.addEventListener('click', () => {
            productProperties.classList.toggle('animate__fadeOut');
            productProperties.classList.add('animate__animated');
            setTimeout(function () {
                productProperties.classList.toggle('visually-hidden');
                productProperties.classList.toggle('animate__fadeIn');}, 300);
                })
    }

    ;}
openInfo();

// цвет размер
let buttonSize = document.querySelector(".product__size"),
buttonColor = document.querySelector(".product__color");
function choiceSizeColor(){
    let listSize = document.querySelector("[data-size]"),
    listColor = document.querySelector("[data-color]");
    if(buttonSize){
        buttonSize.addEventListener('click', () =>{
            listSize.classList.toggle('visually-hidden');
            listColor.classList.add('visually-hidden');
            });
    };
    if(buttonColor){
        buttonColor.addEventListener('click', () =>{
            listColor.classList.toggle('visually-hidden');
            listSize.classList.add('visually-hidden');
        });
    };
}
// отображение выбора цвета
function fixedColor(color) {
   const selectVisualColor = document.querySelector(`[data-color='${color}']`);
   selectVisualColor.addEventListener('click', () =>{
    buttonColor.firstChild.remove();
    buttonColor.insertAdjacentHTML("afterbegin", `<div style="width: 15px;
    height: 15px;
    border:1px solid grey;border-radius: 100%;
    background-color: ${color};
    margin: 15px auto;"></div>`);
   });
}
// отображение выбора размера
function fixedSize(size) {
    const selectSize = document.querySelector(`[data-size='${size}']`);
    selectSize.addEventListener('click', () =>{
    buttonSize.firstChild.remove();
     buttonSize.insertAdjacentHTML("afterbegin", `<span style="text-align: center;
     font-family: "Roboto", sans-serif;
     font-size: 14px;
     line-height: 43px;
     weight:700;">${size}</span>`);
    });
 }
const sizes = document.querySelectorAll('[data-size]');
sizes.forEach(function(item, i) {
    if (i > 0){
        return fixedSize(item.dataset.size);
    }
 });
const colors = document.querySelectorAll('[data-color]');
colors.forEach(function(item, i) {
    if (i > 0){
        return fixedColor(item.dataset.color);
    }
 });
choiceSizeColor();
// слидер
tns ({
    container: '.slider',
    navContainer: '.slideArrow',
    prevButton: '.slider__arrows_left',
    nextButton: '.slider__arrows_right',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    touch: true
  });

});
const callBackForm = () =>{
    let btnShow = document.querySelector('.callBackForm__btn-name'),
        btnSend = document.querySelector('.callBackForm__btn-mail'),
        inputMessage = document.querySelector('.callBackForm__inputName'),
        inputMail = document.querySelector('.callBackForm__inputMail'),
        wrapperShow = document.querySelector('.callBackForm__wrapperMail'),
        infoText = document.querySelector('.callBackForm__wrapperInfo');
        if (btnShow){
            btnShow.addEventListener('click', (e) => {
                e.preventDefault();
                inputMessage.classList.add('visually-hidden');
                btnShow.classList.add('visually-hidden');
                wrapperShow.classList.remove('visually-hidden');
                wrapperShow.classList.add('callBackForm__wrapperMail_show')});
        };
        if (btnSend){
            btnSend.addEventListener('click', (e) => {
                e.preventDefault();
                inputMail.classList.add('visually-hidden');
                btnSend.classList.add('visually-hidden');
                infoText.textContent = 'Отлично! Теперь мы и почту вашу получили';});
        };
    (function() {
  const txt = document.querySelector('textarea'),
        fn = function() {
        setTimeout(function() {
          txt.style.height = 'auto';
          txt.style.height = txt.scrollHeight + 'px';
        }, 0);
      };
      if(txt){
        txt.addEventListener('keydown', fn, false);
      };
})();
};
callBackForm();
