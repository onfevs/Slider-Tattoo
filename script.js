const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function resetSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
}

function resetDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
}

function resetThumbnails() {
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active-thumbnail');
    }
}

function startSlide() {
    resetSlides();
    resetDots();
    resetThumbnails();
    slides[0].classList.add('active');
    dots[0].classList.add('active-dot');
    thumbnails[0].classList.add('active-thumbnail');
}

function moveSlide(direction) {
    resetSlides();
    resetDots();
    resetThumbnails();
    if (direction === 'left') {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
    } else {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
    }
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active-dot');
    thumbnails[currentIndex].classList.add('active-thumbnail');
}

function navigateSlide() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            resetSlides();
            resetDots();
            resetThumbnails();
            slides[i].classList.add('active');
            dots[i].classList.add('active-dot');
            thumbnails[i].classList.add('active-thumbnail');
            currentIndex = i;
        });
    }
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', () => {
            resetSlides();
            resetDots();
            resetThumbnails();
            slides[i].classList.add('active');
            dots[i].classList.add('active-dot');
            thumbnails[i].classList.add('active-thumbnail');
            currentIndex = i;
        });
    }
    prevBtn.addEventListener('click', () => {
        moveSlide('left');
    });

    nextBtn.addEventListener('click', () => {
        moveSlide('right');
    });
}

function autoSlide() {
    setInterval(() => {
        moveSlide('right');
    }, 5000);
}

startSlide();
navigateSlide();
autoSlide();

// fetch('slider.json')
//     .then(response => response.json())
//     .then(data => {
//         // Aquí ya puedes utilizar la información del archivo JSON
//         const slides = data.slides;
//         const dots = document.querySelectorAll('.dot');
//         const thumbnails = document.querySelectorAll('.thumbnail');
//         const prevBtn = document.querySelector('.prev');
//         const nextBtn = document.querySelector('.next');
//         let currentIndex = 0;

//         function resetSlides() {
//             for (let i = 0; i < slides.length; i++) {
//                 slides[i].classList.remove('active');
//             }
//         }

//         function resetDots() {
//             for (let i = 0; i < dots.length; i++) {
//                 dots[i].classList.remove('active-dot');
//             }
//         }

//         function resetThumbnails() {
//             for (let i = 0; i < thumbnails.length; i++) {
//                 thumbnails[i].classList.remove('active-thumbnail');
//             }
//         }

//         function startSlide() {
//             resetSlides();
//             resetDots();
//             resetThumbnails();
//             slides[0].classList.add('active');
//             dots[0].classList.add('active-dot');
//             thumbnails[0].classList.add('active-thumbnail');
//         }

//         function moveSlide(direction) {
//             resetSlides();
//             resetDots();
//             resetThumbnails();
//             if (direction === 'left') {
//                 currentIndex--;
//                 if (currentIndex < 0) {
//                     currentIndex = slides.length - 1;
//                 }
//             } else {
//                 currentIndex++;
//                 if (currentIndex >= slides.length) {
//                     currentIndex = 0;
//                 }
//             }
//             slides[currentIndex].classList.add('active');
//             dots[currentIndex].classList.add('active-dot');
//             thumbnails[currentIndex].classList.add('active-thumbnail');
//         }

//         function navigateSlide() {
//             for (let i = 0; i < dots.length; i++) {
//                 dots[i].addEventListener('click', () => {
//                     resetSlides();
//                     resetDots();
//                     resetThumbnails();
//                     slides[i].classList.add('active');
//                     dots[i].classList.add('active-dot');
//                     thumbnails[i].classList.add('active-thumbnail');
//                     currentIndex = i;
//                 });
//             }
//             for (let i = 0; i < thumbnails.length; i++) {
//                 thumbnails[i].addEventListener('click', () => {
//                     resetSlides();
//                     resetDots();
//                     resetThumbnails();
//                     slides[i].classList.add('active');
//                     dots[i].classList.add('active-dot');
//                     thumbnails[i].classList.add('active-thumbnail');
//                     currentIndex = i;
//                 });
//             }
//             prevBtn.addEventListener('click', () => {
//                 moveSlide('left');
//             });

//             nextBtn.addEventListener('click', () => {
//                 moveSlide('right');
//             });
//         }

//         function autoSlide() {
//             setInterval(() => {
//                 moveSlide('right');
//             }, 5000);
//         }

//         startSlide();
//         navigateSlide();
//         autoSlide();
//     })
//     .catch(error => console.error('Error:', error));
