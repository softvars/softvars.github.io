document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let carouselInterval;

    // Function to change slides
    function changeSlide() {
        const currentItem = items[currentIndex];
        currentItem.classList.remove('active');
        currentItem.classList.add('previous');
        
        // Slide the current item out to the left and hide it
        currentItem.style.transform = 'translateX(-100%)';
        currentItem.style.opacity = '0';

        // Move to the next item
        currentIndex = (currentIndex + 1) % items.length;

        // Get the next item and slide it in from the right
        const nextItem = items[currentIndex];
        nextItem.classList.add('active');
        nextItem.style.transform = 'translateX(0)';
        nextItem.style.opacity = '1';

        // Reset the previous item's position after the transition
        setTimeout(() => {
            currentItem.classList.remove('previous');
            currentItem.style.transform = 'translateX(100%)';
        }, 1000); // Matches the CSS transition duration
    }

    // Function to start the carousel
    function startCarousel() {
        carouselInterval = setInterval(changeSlide, 3000);
    }

    // Function to stop the carousel
    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Add event listeners for mouseover and mouseout
    const carouselContainer = document.querySelector('.carousel');
    carouselContainer.addEventListener('mouseover', stopCarousel);
    carouselContainer.addEventListener('mouseout', startCarousel);

    // Start the carousel initially
    startCarousel();
});
