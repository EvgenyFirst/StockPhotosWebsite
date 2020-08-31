'use strict';

var ENTER_CODE = 'Enter';

var arrowRightSlideOne = document.querySelector('.section-2__arrow-right-1'); // стрелка вправо, слайд 1
var arrowRightSlideTwo = document.querySelector('.section-2__arrow-right-2'); // стрелка вправо, слайд 2
var arrowRightSlideThree = document.querySelector('.section-2__arrow-right-3'); // стрелка вправо, слайд 3

var arrowLeftSlideOne = document.querySelector('.section-2__arrow-left-1'); // стрелка вправо, слайд 1
var arrowLeftSlideTwo = document.querySelector('.section-2__arrow-left-2'); // стрелка вправо, слайд 2
var arrowLeftSlideThree = document.querySelector('.section-2__arrow-left-3'); // стрелка вправо, слайд 3

var slideOne = document.querySelector('.section-2__slide-1'); // первый слайд
var slideTwo = document.querySelector('.section-2__slide-2'); // второй слайд
var slideThree = document.querySelector('.section-2__slide-3'); // третий слайд

// первый слайд (стрелка вправо) (start)
var openSlideTwoRightArrow = function () { // открывает второй слайд при нажатии на стрелку вправо слайда 1
    slideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.add('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
};
var goSlideTwoRightArrow = function () {  // открывает второй слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 1
    openSlideTwoRightArrow();
    removeEventListenerOpenSlideOneRightArrow();
    removeEventListenerOpenSlideThreeRightArrow();
    
    removeEventListenerOpenSlideOneLeftArrow();
    removeEventListenerOpenSlideTwoLeftArrow();
    removeEventListenerOpenSlideThreeLeftArrow();
};
arrowRightSlideOne.addEventListener('click', function () { // клик по стрелке
    goSlideTwoRightArrow();
});
arrowRightSlideOne.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideTwoRightArrow();
    }
});
// первый слайд (стрелка вправо) (end)

// второй слайд (стрелка вправо) (start)
var openSlideThreeRightArrow = function () { // открывает третий слайд при нажатии на стрелку вправо слайда 2
    slideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.add('section-2__slide-top');
};
var goSlideThreeRightArrow = function () {  // открывает третий слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 2
    openSlideThreeRightArrow();
    removeEventListenerOpenSlideOneRightArrow();
    removeEventListenerOpenSlideTwoRightArrow();
    
    removeEventListenerOpenSlideOneLeftArrow();
    removeEventListenerOpenSlideTwoLeftArrow();
    removeEventListenerOpenSlideThreeLeftArrow();
};
arrowRightSlideTwo.addEventListener('click', function () { // клик по стрелке
    goSlideThreeRightArrow();
});
arrowRightSlideTwo.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideThreeRightArrow();
    }
});
// второй слайд (стрелка вправо) (end)

// первый слайд (стрелка вправо) (start)
var openSlideOneRightArrow = function () {  // открывает первый слайд при нажатии на стрелку вправо слайда 3
    slideOne.classList.add('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
};
var goSlideOneRightArrow = function () {  // открывает первый слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 3
    openSlideOneRightArrow();
    removeEventListenerOpenSlideTwoRightArrow();
    removeEventListenerOpenSlideThreeRightArrow();
    
    removeEventListenerOpenSlideOneLeftArrow();
    removeEventListenerOpenSlideTwoLeftArrow();
    removeEventListenerOpenSlideThreeLeftArrow();
};
arrowRightSlideThree.addEventListener('click', function () { // клик по стрелке
    goSlideOneRightArrow();
});
arrowRightSlideThree.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideOneRightArrow();
    }
});
// первый слайд (стрелка вправо) (end)

// второй слайд (стрелка влево) (start)
var openSlideTwoLeftArrow = function () { // открывает второй слайд при нажатии на стрелку влево слайда 1
    slideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.add('section-2__slide-top');
};
var goSlideTwoLeftArrow = function () {  // открывает второй слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 1
    openSlideTwoLeftArrow();
    removeEventListenerOpenSlideOneRightArrow();
    removeEventListenerOpenSlideTwoRightArrow();
    removeEventListenerOpenSlideThreeRightArrow();
    
    removeEventListenerOpenSlideOneLeftArrow();
    removeEventListenerOpenSlideThreeLeftArrow();
};
arrowLeftSlideOne.addEventListener('click', function () { // клик по стрелке
    goSlideTwoLeftArrow();
});
arrowLeftSlideOne.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideTwoLeftArrow();
    }
});
// второй слайд (стрелка влево) (end)

// третий слайд (стрелка влево) (start)
var openSlideThreeLeftArrow = function () {  // открывает третий слайд при нажатии на стрелку влево слайда 2
    slideOne.classList.add('section-2__slide-top');
    slideTwo.classList.remove('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
};
var goSlideThreeLeftArrow = function () {  // открывает третий слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 2
    openSlideThreeLeftArrow();
    removeEventListenerOpenSlideOneRightArrow();
    removeEventListenerOpenSlideTwoRightArrow();
    removeEventListenerOpenSlideThreeRightArrow();
    
    removeEventListenerOpenSlideOneLeftArrow();
    removeEventListenerOpenSlideTwoLeftArrow();
};
arrowLeftSlideTwo.addEventListener('click', function () { // клик по стрелке
    goSlideThreeLeftArrow();
});
arrowLeftSlideTwo.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideThreeLeftArrow();
    }
});
// третий слайд (стрелка влево) (end)

// первый слайд (стрелка влево) (start)
var openSlideOneLeftArrow = function () {
    slideOne.classList.remove('section-2__slide-top');
    slideTwo.classList.add('section-2__slide-top');
    slideThree.classList.remove('section-2__slide-top');
};
var goSlideOneLeftArrow = function () {  // открывает первый слайд при нажатии на стрелку иили нажатии кнопки Enter (если выбрана) влево слайда 3
    openSlideOneLeftArrow();
    removeEventListenerOpenSlideOneRightArrow();
    removeEventListenerOpenSlideTwoRightArrow();
    removeEventListenerOpenSlideThreeRightArrow();

    removeEventListenerOpenSlideTwoLeftArrow();
    removeEventListenerOpenSlideThreeLeftArrow();
};
arrowLeftSlideThree.addEventListener('click', function () { // клик по стрелке
    goSlideOneLeftArrow();
});
arrowLeftSlideThree.addEventListener('keydown', function (evt) { // нажатие на клавишу
    if (evt.key === ENTER_CODE) {
        goSlideOneLeftArrow();
    }
});
// первый слайд (стрелка влево) (end)

// Для удаления обработчиков событий (start)
var removeEventListenerOpenSlideOneRightArrow = function () { // для первого слайда со стрелкой вправо
    document.removeEventListener('keydown', openSlideOneRightArrow);
};
var removeEventListenerOpenSlideTwoRightArrow = function () { // для второго слайда со стрелкой вправо
    document.removeEventListener('keydown', openSlideTwoRightArrow);
};
var removeEventListenerOpenSlideThreeRightArrow = function () { // для третьего слайда со стрелкой вправо
    document.removeEventListener('keydown', openSlideThreeRightArrow);
};

var removeEventListenerOpenSlideOneLeftArrow = function () { // для первого слайда со стрелкой влево
    document.removeEventListener('keydown', openSlideOneLeftArrow);
};
var removeEventListenerOpenSlideTwoLeftArrow = function () { // для второго слайда со стрелкой влево
    document.removeEventListener('keydown', openSlideTwoLeftArrow);
};
var removeEventListenerOpenSlideThreeLeftArrow = function () { // для третьего слайда со стрелкой влево
    document.removeEventListener('keydown', openSlideThreeLeftArrow);
};
// Для удаления обработчиков событий (end)