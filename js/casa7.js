const trackcasa7 = document.querySelector('.carousel_trackcasa7');
const slidescasa7 = Array.from(trackcasa7.children);
const nextButtoncasa7 = document.querySelector('.carousel_button--rightcasa7');
const prevButtoncasa7 = document.querySelector('.carousel_button--leftcasa7');
const dotsNavcasa7 = document.querySelector('.carousel_navcasa7');
const dotscasa7 = Array.from(dotsNavcasa7.children);

const slideWidthcasa7 = slidescasa7[0].getBoundingClientRect().width;

const setSlidePositioncasa7 = (slidecasa7, index) => {
slidecasa7.style.left = slideWidthcasa7 * index + 'px';
};

slidescasa7.forEach(setSlidePositioncasa7);

const moveToSlidecasa7 = (trackcasa7, currentSlidecasa7, targetSlidecasa7) => {
trackcasa7.style.transform = 'translateX(-' + targetSlidecasa7.style.left + ')';
currentSlidecasa7.classList.remove('current-slidecasa7');
targetSlidecasa7.classList.add('current-slidecasa7');
};

prevButtoncasa7.addEventListener('click', e => {
const currentSlidecasa7 = trackcasa7.querySelector('.current-slidecasa7');
const prevSlidecasa7 = currentSlidecasa7.previousElementSibling || slidescasa7[slidescasa7.length - 1];
moveToSlidecasa7(trackcasa7, currentSlidecasa7, prevSlidecasa7);
});

nextButtoncasa7.addEventListener('click', e => {
const currentSlidecasa7 = trackcasa7.querySelector('.current-slidecasa7');
const nextSlidecasa7 = currentSlidecasa7.nextElementSibling || slidescasa7[0];
moveToSlidecasa7(trackcasa7, currentSlidecasa7, nextSlidecasa7);
});

dotsNavcasa7.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa7 = e.target.closest('button');
if (!targetDotcasa7) return;
const currentSlidecasa7 = trackcasa7.querySelector('.current-slidecasa7');
const currentDotcasa7 = dotsNavcasa7.querySelector('.current-slidecasa7');
const targetIndexcasa7 = dotscasa7.findIndex(dotcasa7 => dotcasa7 === targetDotcasa7);
const targetSlidecasa7 = slidescasa7[targetIndexcasa7];
moveToSlidecasa7(trackcasa7, currentSlidecasa7, targetSlidecasa7);
currentDotcasa7.classList.remove('current-slidecasa7');
targetDotcasa7.classList.add('current-slidecasa7');
}); 

console.log(trackcasa7.children)