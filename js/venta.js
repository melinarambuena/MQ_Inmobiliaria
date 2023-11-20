// const track = document.querySelector('.carousel_track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel_button--right');
// const prevButton = document.querySelector('.carousel_button--left');
// const dotsNav = document.querySelector('.carousel_nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;


// // console.log(slideSize);

// //arrange the slides next to one another
// const setSlidePosition = (slide, index) => {
//  slide.style.left = slideWidth * index + 'px';

// }
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
    
// }

// // when i clic left, move slides to the left

// prevButton.addEventListener('click', e => {
// const currentSlide = track.querySelector('.current-slide');
// const prevSlide = currentSlide.previousElementSibling;

// moveToSlide(track, currentSlide, prevSlide);
// })


// // when i clic right, move slides to the right

// nextButton.addEventListener('click', e => {
// const currentSlide = track.querySelector('.current-slide');
// const nextSlide = currentSlide.nextElementSibling;

// moveToSlide(track, currentSlide, nextSlide);

// })

// // when i clic the nav indicators, move to that slide

// dotsNav.addEventListener('click', e => {
// //what indicator was clicked on?
// const targetDot = e.target.closest('button');

// if(!targetDot) return;

// const currentSlide = track.querySelector('.current-slide');
// const currentDot = dotsNav.querySelector('.current-slide');
// const targetIndex = dots.findIndex(dot => dot === targetDot);
// const targetSlide = slides[targetIndex];

// moveToSlide(track, currentSlide, targetSlide);

// currentDot.classList.remove('current-slide');
// targetDot.classList.add('current-slide');

// })

// carousel 1

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
  moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  moveToSlide(track, currentSlide, nextSlide);
});

dotsNav.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
});



//carousel2

const track2 = document.querySelector('.carousel_track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel_button--right2');
const prevButton2 = document.querySelector('.carousel_button--left2');
const dotsNav2 = document.querySelector('.carousel_nav2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide2, index) => {
  slide2.style.left = slideWidth2 * index + 'px';
};

slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
  track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
  currentSlide2.classList.remove('current-slide2');
  targetSlide2.classList.add('current-slide2');
};

prevButton2.addEventListener('click', e => {
  const currentSlide2 = track2.querySelector('.current-slide2');
  const prevSlide2 = currentSlide2.previousElementSibling || slides2[slides2.length - 1];
  moveToSlide2(track2, currentSlide2, prevSlide2);
});

nextButton2.addEventListener('click', e => {
  const currentSlide2 = track2.querySelector('.current-slide2');
  const nextSlide2 = currentSlide2.nextElementSibling || slides2[0];
  moveToSlide2(track2, currentSlide2, nextSlide2);
});

dotsNav2.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot2 = e.target.closest('button');
  if (!targetDot2) return;
  const currentSlide2 = track2.querySelector('.current-slide2');
  const currentDot2 = dotsNav2.querySelector('.current-slide2');
  const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2);
  const targetSlide2 = slides2[targetIndex2];
  moveToSlide2(track2, currentSlide2, targetSlide2);
  currentDot2.classList.remove('current-slide2');
  targetDot2.classList.add('current-slide2');
});


// carousel 3

const track3 = document.querySelector('.carousel_track3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.carousel_button--right3');
const prevButton3 = document.querySelector('.carousel_button--left3');
const dotsNav3 = document.querySelector('.carousel_nav3');
const dots3 = Array.from(dotsNav3.children);

const slideWidth3 = slides3[0].getBoundingClientRect().width;

const setSlidePosition3 = (slide3, index) => {
  slide3.style.left = slideWidth3 * index + 'px';
};

slides3.forEach(setSlidePosition3);

const moveToSlide3 = (track3, currentSlide3, targetSlide3) => {
  track3.style.transform = 'translateX(-' + targetSlide3.style.left + ')';
  currentSlide3.classList.remove('current-slide3');
  targetSlide3.classList.add('current-slide3');
};

prevButton3.addEventListener('click', e => {
  const currentSlide3 = track3.querySelector('.current-slide3');
  const prevSlide3 = currentSlide3.previousElementSibling || slides3[slides3.length - 1];
  moveToSlide3(track3, currentSlide3, prevSlide3);
});

nextButton3.addEventListener('click', e => {
  const currentSlide3 = track3.querySelector('.current-slide3');
  const nextSlide3 = currentSlide3.nextElementSibling || slides3[0];
  moveToSlide3(track3, currentSlide3, nextSlide3);
});

dotsNav3.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot3 = e.target.closest('button');
  if (!targetDot3) return;
  const currentSlide3 = track3.querySelector('.current-slide3');
  const currentDot3 = dotsNav3.querySelector('.current-slide3');
  const targetIndex3 = dots3.findIndex(dot3 => dot3 === targetDot3);
  const targetSlide3 = slides3[targetIndex3];
  moveToSlide3(track3, currentSlide3, targetSlide3);
  currentDot3.classList.remove('current-slide3');
  targetDot3.classList.add('current-slide3');
});

// carousel 4

const track4 = document.querySelector('.carousel_track4');
const slides4 = Array.from(track4.children);
const nextButton4 = document.querySelector('.carousel_button--right4');
const prevButton4 = document.querySelector('.carousel_button--left4');
const dotsNav4 = document.querySelector('.carousel_nav4');
const dots4 = Array.from(dotsNav4.children);

const slideWidth4 = slides4[0].getBoundingClientRect().width;

const setSlidePosition4 = (slide4, index) => {
  slide4.style.left = slideWidth4 * index + 'px';
};

slides4.forEach(setSlidePosition4);

const moveToSlide4 = (track4, currentSlide4, targetSlide4) => {
  track4.style.transform = 'translateX(-' + targetSlide4.style.left + ')';
  currentSlide4.classList.remove('current-slide4');
  targetSlide4.classList.add('current-slide4');
};

prevButton4.addEventListener('click', e => {
  const currentSlide4 = track4.querySelector('.current-slide4');
  const prevSlide4 = currentSlide4.previousElementSibling || slides4[slides4.length - 1];
  moveToSlide4(track4, currentSlide4, prevSlide4);
});

nextButton4.addEventListener('click', e => {
  const currentSlide4 = track4.querySelector('.current-slide4');
  const nextSlide4 = currentSlide4.nextElementSibling || slides4[0];
  moveToSlide4(track4, currentSlide4, nextSlide4);
});

dotsNav4.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot4 = e.target.closest('button');
  if (!targetDot4) return;
  const currentSlide4 = track4.querySelector('.current-slide4');
  const currentDot4 = dotsNav4.querySelector('.current-slide4');
  const targetIndex4 = dots4.findIndex(dot4 => dot4 === targetDot4);
  const targetSlide4 = slides4[targetIndex4];
  moveToSlide4(track4, currentSlide4, targetSlide4);
  currentDot4.classList.remove('current-slide4');
  targetDot4.classList.add('current-slide4');
});

// carousel 5

const track5 = document.querySelector('.carousel_track5');
const slides5 = Array.from(track5.children);
const nextButton5 = document.querySelector('.carousel_button--right5');
const prevButton5 = document.querySelector('.carousel_button--left5');
const dotsNav5 = document.querySelector('.carousel_nav5');
const dots5 = Array.from(dotsNav5.children);

const slideWidth5 = slides5[0].getBoundingClientRect().width;

const setSlidePosition5 = (slide5, index) => {
  slide5.style.left = slideWidth5 * index + 'px';
};

slides5.forEach(setSlidePosition5);

const moveToSlide5 = (track5, currentSlide5, targetSlide5) => {
  track5.style.transform = 'translateX(-' + targetSlide5.style.left + ')';
  currentSlide5.classList.remove('current-slide5');
  targetSlide5.classList.add('current-slide5');
};

prevButton5.addEventListener('click', e => {
  const currentSlide5 = track5.querySelector('.current-slide5');
  const prevSlide5 = currentSlide5.previousElementSibling || slides5[slides5.length - 1];
  moveToSlide5(track5, currentSlide5, prevSlide5);
});

nextButton5.addEventListener('click', e => {
  const currentSlide5 = track5.querySelector('.current-slide5');
  const nextSlide5 = currentSlide5.nextElementSibling || slides5[0];
  moveToSlide5(track5, currentSlide5, nextSlide5);
});

dotsNav5.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot5 = e.target.closest('button');
  if (!targetDot5) return;
  const currentSlide5 = track5.querySelector('.current-slide5');
  const currentDot5 = dotsNav5.querySelector('.current-slide5');
  const targetIndex5 = dots5.findIndex(dot5 => dot5 === targetDot5);
  const targetSlide5 = slides5[targetIndex5];
  moveToSlide5(track5, currentSlide5, targetSlide5);
  currentDot5.classList.remove('current-slide5');
  targetDot5.classList.add('current-slide5');
});






// carousel 6

const track6 = document.querySelector('.carousel_track6');
const slides6 = Array.from(track6.children);
const nextButton6 = document.querySelector('.carousel_button--right6');
const prevButton6 = document.querySelector('.carousel_button--left6');
const dotsNav6 = document.querySelector('.carousel_nav6');
const dots6 = Array.from(dotsNav6.children);

const slideWidth6 = slides6[0].getBoundingClientRect().width;

const setSlidePosition6 = (slide6, index) => {
  slide6.style.left = slideWidth6 * index + 'px';
};

slides6.forEach(setSlidePosition6);

const moveToSlide6 = (track6, currentSlide6, targetSlide6) => {
  track6.style.transform = 'translateX(-' + targetSlide6.style.left + ')';
  currentSlide6.classList.remove('current-slide6');
  targetSlide6.classList.add('current-slide6');
};

prevButton6.addEventListener('click', e => {
  const currentSlide6 = track6.querySelector('.current-slide6');
  const prevSlide6 = currentSlide6.previousElementSibling || slides6[slides6.length - 1];
  moveToSlide6(track6, currentSlide6, prevSlide6);
});

nextButton6.addEventListener('click', e => {
  const currentSlide6 = track6.querySelector('.current-slide6');
  const nextSlide6 = currentSlide6.nextElementSibling || slides6[0];
  moveToSlide6(track6, currentSlide6, nextSlide6);
});

dotsNav6.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot6 = e.target.closest('button');
  if (!targetDot6) return;
  const currentSlide6 = track6.querySelector('.current-slide6');
  const currentDot6 = dotsNav6.querySelector('.current-slide6');
  const targetIndex6 = dots6.findIndex(dot6 => dot6 === targetDot6);
  const targetSlide6 = slides6[targetIndex6];
  moveToSlide6(track6, currentSlide6, targetSlide6);
  currentDot6.classList.remove('current-slide6');
  targetDot6.classList.add('current-slide6');
});

// carousel 7

const track7 = document.querySelector('.carousel_track7');
const slides7 = Array.from(track7.children);
const nextButton7 = document.querySelector('.carousel_button--right7');
const prevButton7 = document.querySelector('.carousel_button--left7');
const dotsNav7 = document.querySelector('.carousel_nav7');
const dots7 = Array.from(dotsNav7.children);

const slideWidth7 = slides7[0].getBoundingClientRect().width;

const setSlidePosition7 = (slide7, index) => {
  slide7.style.left = slideWidth7 * index + 'px';
};

slides7.forEach(setSlidePosition7);

const moveToSlide7 = (track7, currentSlide7, targetSlide7) => {
  track7.style.transform = 'translateX(-' + targetSlide7.style.left + ')';
  currentSlide7.classList.remove('current-slide7');
  targetSlide7.classList.add('current-slide7');
};

prevButton7.addEventListener('click', e => {
  const currentSlide7 = track7.querySelector('.current-slide7');
  const prevSlide7 = currentSlide7.previousElementSibling || slides7[slides7.length - 1];
  moveToSlide7(track7, currentSlide7, prevSlide7);
});

nextButton7.addEventListener('click', e => {
  const currentSlide7 = track7.querySelector('.current-slide7');
  const nextSlide7 = currentSlide7.nextElementSibling || slides7[0];
  moveToSlide7(track7, currentSlide7, nextSlide7);
});

dotsNav7.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot7 = e.target.closest('button');
  if (!targetDot7) return;
  const currentSlide7 = track7.querySelector('.current-slide7');
  const currentDot7 = dotsNav7.querySelector('.current-slide7');
  const targetIndex7 = dots7.findIndex(dot7 => dot7 === targetDot7);
  const targetSlide7 = slides7[targetIndex7];
  moveToSlide7(track7, currentSlide7, targetSlide7);
  currentDot7.classList.remove('current-slide7');
  targetDot7.classList.add('current-slide7');
});




