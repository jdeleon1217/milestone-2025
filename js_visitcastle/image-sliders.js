document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll(".carousel-image");
    const intervalTime = 4000; // 4 seconds per slide
    let slideInterval;

    function showSlide(n) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === n) {
                img.classList.add("active");
            }
        });
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    window.prevSlide = function () {
        prevSlide();
        resetAutoSlide();
    };

    window.nextSlide = function () {
        nextSlide();
        resetAutoSlide();
    };

    // Initialize first image and start slideshow
    showSlide(index);
    startAutoSlide();
});


