const trackcasa5 = document.querySelector('.carousel_trackcasa5');
const slidescasa5 = Array.from(trackcasa5.children);
const nextButtoncasa5 = document.querySelector('.carousel_button--rightcasa5');
const prevButtoncasa5 = document.querySelector('.carousel_button--leftcasa5');
const dotsNavcasa5 = document.querySelector('.carousel_navcasa5');
const dotscasa5 = Array.from(dotsNavcasa5.children);

const slideWidthcasa5 = slidescasa5[0].getBoundingClientRect().width;

const setSlidePositioncasa5 = (slidecasa5, index) => {
slidecasa5.style.left = slideWidthcasa5 * index + 'px';
};

slidescasa5.forEach(setSlidePositioncasa5);

const moveToSlidecasa5 = (trackcasa5, currentSlidecasa5, targetSlidecasa5) => {
trackcasa5.style.transform = 'translateX(-' + targetSlidecasa5.style.left + ')';
currentSlidecasa5.classList.remove('current-slidecasa5');
targetSlidecasa5.classList.add('current-slidecasa5');
};

prevButtoncasa5.addEventListener('click', e => {
const currentSlidecasa5 = trackcasa5.querySelector('.current-slidecasa5');
const prevSlidecasa5 = currentSlidecasa5.previousElementSibling || slidescasa5[slidescasa5.length - 1];
moveToSlidecasa5(trackcasa5, currentSlidecasa5, prevSlidecasa5);
});

nextButtoncasa5.addEventListener('click', e => {
const currentSlidecasa5 = trackcasa5.querySelector('.current-slidecasa5');
const nextSlidecasa5 = currentSlidecasa5.nextElementSibling || slidescasa5[0];
moveToSlidecasa5(trackcasa5, currentSlidecasa5, nextSlidecasa5);
});

dotsNavcasa5.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa5 = e.target.closest('button');
if (!targetDotcasa5) return;
const currentSlidecasa5 = trackcasa5.querySelector('.current-slidecasa5');
const currentDotcasa5 = dotsNavcasa5.querySelector('.current-slidecasa5');
const targetIndexcasa5 = dotscasa5.findIndex(dotcasa5 => dotcasa5 === targetDotcasa5);
const targetSlidecasa5 = slidescasa5[targetIndexcasa5];
moveToSlidecasa5(trackcasa5, currentSlidecasa5, targetSlidecasa5);
currentDotcasa5.classList.remove('current-slidecasa5');
targetDotcasa5.classList.add('current-slidecasa5');
}); 

console.log(trackcasa5.children)