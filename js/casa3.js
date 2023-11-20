const trackcasa3 = document.querySelector('.carousel_trackcasa3');
const slidescasa3 = Array.from(trackcasa3.children);
const nextButtoncasa3 = document.querySelector('.carousel_button--rightcasa3');
const prevButtoncasa3 = document.querySelector('.carousel_button--leftcasa3');
const dotsNavcasa3 = document.querySelector('.carousel_navcasa3');
const dotscasa3 = Array.from(dotsNavcasa3.children);

const slideWidthcasa3 = slidescasa3[0].getBoundingClientRect().width;

const setSlidePositioncasa3 = (slidecasa3, index) => {
slidecasa3.style.left = slideWidthcasa3 * index + 'px';
};

slidescasa3.forEach(setSlidePositioncasa3);

const moveToSlidecasa3 = (trackcasa3, currentSlidecasa3, targetSlidecasa3) => {
trackcasa3.style.transform = 'translateX(-' + targetSlidecasa3.style.left + ')';
currentSlidecasa3.classList.remove('current-slidecasa3');
targetSlidecasa3.classList.add('current-slidecasa3');
};

prevButtoncasa3.addEventListener('click', e => {
const currentSlidecasa3 = trackcasa3.querySelector('.current-slidecasa3');
const prevSlidecasa3 = currentSlidecasa3.previousElementSibling || slidescasa3[slidescasa3.length - 1];
moveToSlidecasa3(trackcasa3, currentSlidecasa3, prevSlidecasa3);
});

nextButtoncasa3.addEventListener('click', e => {
const currentSlidecasa3 = trackcasa3.querySelector('.current-slidecasa3');
const nextSlidecasa3 = currentSlidecasa3.nextElementSibling || slidescasa3[0];
moveToSlidecasa3(trackcasa3, currentSlidecasa3, nextSlidecasa3);
});

dotsNavcasa3.addEventListener('click', e => {
//what indicator was clicked on?
const targetDotcasa3 = e.target.closest('button');
if (!targetDotcasa3) return;
const currentSlidecasa3 = trackcasa3.querySelector('.current-slidecasa3');
const currentDotcasa3 = dotsNavcasa3.querySelector('.current-slidecasa3');
const targetIndexcasa3 = dotscasa3.findIndex(dotcasa3 => dotcasa3 === targetDotcasa3);
const targetSlidecasa3 = slidescasa3[targetIndexcasa3];
moveToSlidecasa3(trackcasa3, currentSlidecasa3, targetSlidecasa3);
currentDotcasa3.classList.remove('current-slidecasa3');
targetDotcasa3.classList.add('current-slidecasa3');
}); 

console.log(trackcasa3.children)