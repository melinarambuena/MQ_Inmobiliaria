const trackcasa2 = document.querySelector('.carousel_trackcasa2');
const slidescasa2 = Array.from(trackcasa2.children);
const nextButtoncasa2 = document.querySelector('.carousel_button--rightcasa2');
const prevButtoncasa2 = document.querySelector('.carousel_button--leftcasa2');
const dotsNavcasa2 = document.querySelector('.carousel_navcasa2');
const dotscasa2 = Array.from(dotsNavcasa2.children);

const slideWidthcasa2 = slidescasa2[0].getBoundingClientRect().width;

const setSlidePositioncasa2 = (slidecasa2, index) => {
slidecasa2.style.left = slideWidthcasa2 * index + 'px';
};

slidescasa2.forEach(setSlidePositioncasa2);

const moveToSlidecasa2 = (trackcasa2, currentSlidecasa2, targetSlidecasa2) => {
trackcasa2.style.transform = 'translateX(-' + targetSlidecasa2.style.left + ')';
currentSlidecasa2.classList.remove('current-slidecasa2');
targetSlidecasa2.classList.add('current-slidecasa2');
};

prevButtoncasa2.addEventListener('click', e => {
const currentSlidecasa2 = trackcasa2.querySelector('.current-slidecasa2');
const prevSlidecasa2 = currentSlidecasa2.previousElementSibling || slidescasa2[slidescasa2.length - 1];
moveToSlidecasa2(trackcasa2, currentSlidecasa2, prevSlidecasa2);
});

nextButtoncasa2.addEventListener('click', e => {
const currentSlidecasa2 = trackcasa2.querySelector('.current-slidecasa2');
const nextSlidecasa2 = currentSlidecasa2.nextElementSibling || slidescasa2[0];
moveToSlidecasa2(trackcasa2, currentSlidecasa2, nextSlidecasa2);
});

dotsNavcasa2.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa2 = e.target.closest('button');
if (!targetDotcasa2) return;
const currentSlidecasa2 = trackcasa2.querySelector('.current-slidecasa2');
const currentDotcasa2 = dotsNavcasa2.querySelector('.current-slidecasa2');
const targetIndexcasa2 = dotscasa2.findIndex(dotcasa2 => dotcasa2 === targetDotcasa2);
const targetSlidecasa2 = slidescasa2[targetIndexcasa2];
moveToSlidecasa2(trackcasa2, currentSlidecasa2, targetSlidecasa2);
currentDotcasa2.classList.remove('current-slidecasa2');
targetDotcasa2.classList.add('current-slidecasa2');
}); 

console.log(trackcasa2.children)