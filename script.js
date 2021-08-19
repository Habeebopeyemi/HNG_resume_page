const btn = document.querySelector(".know--my--name");

const myName = () => alert("My name is Suleiman Habeeb Opeyemi with slack name Deveeb");

btn.addEventListener('click', myName);

const slidingMovement = function () {
  // slider
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;
  // console.log(maxSlide)

  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // creating slider position indicator
  const createDot = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide = "${i}"></button>`
      );
    });
  };
  // createDot();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // activateDot(0);

  const gotoSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // gotoSlide(0);

  // next slide
  const nextSlide = function () {
    if (currentSlide == maxSlide - 1) currentSlide = 0;
    else currentSlide++;

    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };

  // previous slide
  const prevSlide = function () {
    if (currentSlide == 0) currentSlide = maxSlide - 1;
    else currentSlide--;

    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };
  const initializer = function () {
    gotoSlide(0);
    createDot();

    activateDot(0);
  };
  initializer();
  // event Handler
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT');
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDot(slide);
    }
  });
};
slidingMovement();