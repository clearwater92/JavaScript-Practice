const getSlides = document.querySelectorAll('.slide');
let currentSlide = 0;

// 슬라이드 수를 증가
const nextSlide = () => {
    changeSlide(currentSlide + 1);
};

// 슬라이드 수를 감소
const prevSlide = () => {
    changeSlide(currentSlide - 1);
}


// select arrow
const next = document.querySelector('.fa-arrow-right');
const prev = document.querySelector('.fa-arrow-left');

// 클릭을 하면 
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const changeSlide = clicked => {
    // 현재 슬라이드의 show 상태를 없앰
    getSlides[currentSlide].className = 'slide';
    // 예를 들어 0에서 prevSlide를 한 경우, -1이 되는데 underflow가 일어나지 않도록 산술연산
    currentSlide = (clicked + getSlides.length) % getSlides.length;
    // 현재 슬라이드를 보여주는 CSS 클래스를 더함
    getSlides[currentSlide].className = 'slide show';
}