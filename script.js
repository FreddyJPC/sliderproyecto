const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
const slides = document.querySelectorAll(".slide");

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === counter) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    counter = (counter - 1 + slides.length) % slides.length;
    updateSlide();
});

updateSlide();
