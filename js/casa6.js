const trackcasa6 = document.querySelector('.carousel_trackcasa6');
const slidescasa6 = Array.from(trackcasa6.children);
const nextButtoncasa6 = document.querySelector('.carousel_button--rightcasa6');
const prevButtoncasa6 = document.querySelector('.carousel_button--leftcasa6');
const dotsNavcasa6 = document.querySelector('.carousel_navcasa6');
const dotscasa6 = Array.from(dotsNavcasa6.children);

const slideWidthcasa6 = slidescasa6[0].getBoundingClientRect().width;

const setSlidePositioncasa6 = (slidecasa6, index) => {
slidecasa6.style.left = slideWidthcasa6 * index + 'px';
};

slidescasa6.forEach(setSlidePositioncasa6);

const moveToSlidecasa6 = (trackcasa6, currentSlidecasa6, targetSlidecasa6) => {
trackcasa6.style.transform = 'translateX(-' + targetSlidecasa6.style.left + ')';
currentSlidecasa6.classList.remove('current-slidecasa6');
targetSlidecasa6.classList.add('current-slidecasa6');
};

prevButtoncasa6.addEventListener('click', e => {
const currentSlidecasa6 = trackcasa6.querySelector('.current-slidecasa6');
const prevSlidecasa6 = currentSlidecasa6.previousElementSibling || slidescasa6[slidescasa6.length - 1];
moveToSlidecasa6(trackcasa6, currentSlidecasa6, prevSlidecasa6);
});

nextButtoncasa6.addEventListener('click', e => {
const currentSlidecasa6 = trackcasa6.querySelector('.current-slidecasa6');
const nextSlidecasa6 = currentSlidecasa6.nextElementSibling || slidescasa6[0];
moveToSlidecasa6(trackcasa6, currentSlidecasa6, nextSlidecasa6);
});

dotsNavcasa6.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa6 = e.target.closest('button');
if (!targetDotcasa6) return;
const currentSlidecasa6 = trackcasa6.querySelector('.current-slidecasa6');
const currentDotcasa6 = dotsNavcasa6.querySelector('.current-slidecasa6');
const targetIndexcasa6 = dotscasa6.findIndex(dotcasa6 => dotcasa6 === targetDotcasa6);
const targetSlidecasa6 = slidescasa6[targetIndexcasa6];
moveToSlidecasa6(trackcasa6, currentSlidecasa6, targetSlidecasa6);
currentDotcasa6.classList.remove('current-slidecasa6');
targetDotcasa6.classList.add('current-slidecasa6');
}); 

console.log(trackcasa6.children)