const slideTexts = [
    "mens Perfumes",
    "Womens Perfumes",
    "Unisex Perfumes"
    // Add more texts for additional slides if needed
];

let currentSlideIndex = 0;
let index = 0;

function typeWriter() {
    const currentSlideText = slideTexts[currentSlideIndex];
    if (index < currentSlideText.length) {
        document.getElementById("typing-text").innerHTML += currentSlideText.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
});

document.getElementById("carouselExampleCaptions").addEventListener('slid.bs.carousel', function () {
    index = 0;
    currentSlideIndex = document.querySelector('.carousel-inner .carousel-item.active').getAttribute('data-bs-slide-to');
    document.getElementById("typing-text").innerHTML = "";
    typeWriter();
});
