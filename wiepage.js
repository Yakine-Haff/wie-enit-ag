const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const next = carousel.parentElement.querySelector('.next');
    const prev = carousel.parentElement.querySelector('.prev');
    let currentIndex = 0;

    function updateImages() {
        images.forEach((img, index) => {
            img.classList.remove('active'); // Remove active class from all images
            if (index === currentIndex) {
                img.classList.add('active'); // Add active class to the current image
            }
        });
    }

    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
        updateImages();
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end
        updateImages();
    });

    updateImages(); // Initialize the carousel
});
