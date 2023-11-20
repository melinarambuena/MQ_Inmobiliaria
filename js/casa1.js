// casa 1

const trackcasa1 = document.querySelector('.carousel_trackcasa1');
const slidescasa1 = Array.from(trackcasa1.children);
const nextButtoncasa1 = document.querySelector('.carousel_button--rightcasa1');
const prevButtoncasa1 = document.querySelector('.carousel_button--leftcasa1');
const dotsNavcasa1 = document.querySelector('.carousel_navcasa1');
const dotscasa1 = Array.from(dotsNavcasa1.children);

const slideWidthcasa1 = slidescasa1[0].getBoundingClientRect().width;

const setSlidePositioncasa1 = (slidecasa1, index) => {
slidecasa1.style.left = slideWidthcasa1 * index + 'px';
};

slidescasa1.forEach(setSlidePositioncasa1);

const moveToSlidecasa1 = (trackcasa1, currentSlidecasa1, targetSlidecasa1) => {
trackcasa1.style.transform = 'translateX(-' + targetSlidecasa1.style.left + ')';
currentSlidecasa1.classList.remove('current-slidecasa1');
targetSlidecasa1.classList.add('current-slidecasa1');
};

prevButtoncasa1.addEventListener('click', e => {
const currentSlidecasa1 = trackcasa1.querySelector('.current-slidecasa1');
const prevSlidecasa1 = currentSlidecasa1.previousElementSibling || slidescasa1[slidescasa1.length - 1];
moveToSlidecasa1(trackcasa1, currentSlidecasa1, prevSlidecasa1);
});

nextButtoncasa1.addEventListener('click', e => {
const currentSlidecasa1 = trackcasa1.querySelector('.current-slidecasa1');
const nextSlidecasa1 = currentSlidecasa1.nextElementSibling || slidescasa1[0];
moveToSlidecasa1(trackcasa1, currentSlidecasa1, nextSlidecasa1);
});

dotsNavcasa1.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa1 = e.target.closest('button');
if (!targetDotcasa1) return;
const currentSlidecasa1 = trackcasa1.querySelector('.current-slidecasa1');
const currentDotcasa1 = dotsNavcasa1.querySelector('.current-slidecasa1');
const targetIndexcasa1 = dotscasa1.findIndex(dotcasa1 => dotcasa1 === targetDotcasa1);
const targetSlidecasa1 = slidescasa1[targetIndexcasa1];
moveToSlidecasa1(trackcasa1, currentSlidecasa1, targetSlidecasa1);
currentDotcasa1.classList.remove('current-slidecasa1');
targetDotcasa1.classList.add('current-slidecasa1');
}); 

console.log(trackcasa1.children)