const trackcasa4 = document.querySelector('.carousel_trackcasa4');
const slidescasa4 = Array.from(trackcasa4.children);
const nextButtoncasa4 = document.querySelector('.carousel_button--rightcasa4');
const prevButtoncasa4 = document.querySelector('.carousel_button--leftcasa4');
const dotsNavcasa4 = document.querySelector('.carousel_navcasa4');
const dotscasa4 = Array.from(dotsNavcasa4.children);

const slideWidthcasa4 = slidescasa4[0].getBoundingClientRect().width;

const setSlidePositioncasa4 = (slidecasa4, index) => {
slidecasa4.style.left = slideWidthcasa4 * index + 'px';
};

slidescasa4.forEach(setSlidePositioncasa4);

const moveToSlidecasa4 = (trackcasa4, currentSlidecasa4, targetSlidecasa4) => {
trackcasa4.style.transform = 'translateX(-' + targetSlidecasa4.style.left + ')';
currentSlidecasa4.classList.remove('current-slidecasa4');
targetSlidecasa4.classList.add('current-slidecasa4');
};

prevButtoncasa4.addEventListener('click', e => {
const currentSlidecasa4 = trackcasa4.querySelector('.current-slidecasa4');
const prevSlidecasa4 = currentSlidecasa4.previousElementSibling || slidescasa4[slidescasa4.length - 1];
moveToSlidecasa4(trackcasa4, currentSlidecasa4, prevSlidecasa4);
});

nextButtoncasa4.addEventListener('click', e => {
const currentSlidecasa4 = trackcasa4.querySelector('.current-slidecasa4');
const nextSlidecasa4 = currentSlidecasa4.nextElementSibling || slidescasa4[0];
moveToSlidecasa4(trackcasa4, currentSlidecasa4, nextSlidecasa4);
});

dotsNavcasa4.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa4 = e.target.closest('button');
if (!targetDotcasa4) return;
const currentSlidecasa4 = trackcasa4.querySelector('.current-slidecasa4');
const currentDotcasa4 = dotsNavcasa4.querySelector('.current-slidecasa4');
const targetIndexcasa4 = dotscasa4.findIndex(dotcasa4 => dotcasa4 === targetDotcasa4);
const targetSlidecasa4 = slidescasa4[targetIndexcasa4];
moveToSlidecasa4(trackcasa4, currentSlidecasa4, targetSlidecasa4);
currentDotcasa4.classList.remove('current-slidecasa4');
targetDotcasa4.classList.add('current-slidecasa4');
}); 

console.log(trackcasa4.children)