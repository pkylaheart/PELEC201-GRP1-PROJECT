const tracker = document.getElementById("cards-Track");
const cards = document.querySelectorAll(".menu-card");
const dots = document.querySelectorAll(".dot");

const cardWidth = 370;  // card width + gap (adjust to match CSS)
let currentIndex = 0;

function updateSlider() {
    tracker.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[currentIndex].classList.add("active-dot");
}

document.getElementById("right-arrow").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = cards.length - 1;
    updateSlider();
});

document.getElementById("left-arrow").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > cards.length - 1) currentIndex = 0;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});
