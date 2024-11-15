document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function changeSlide() {
        const currentItem = items[currentIndex];
        currentItem.classList.remove('active');
        currentItem.classList.add('previous');
        
        // Slide the current item out to the left and hide it immediately
        currentItem.style.transform = 'translateX(-100%)';
        currentItem.style.opacity = '0'; // Hide the previous item instantly

        // Move to the next item
        currentIndex = (currentIndex + 1) % items.length;

        // Get the next item and slide it in from the right
        const nextItem = items[currentIndex];
        nextItem.classList.add('active');
        nextItem.style.transform = 'translateX(0)'; // Center the new item
        nextItem.style.opacity = '1'; // Make it fully visible

        // Delay the reset of the previous item until after the transition
        setTimeout(() => {
            currentItem.classList.remove('previous');
            currentItem.style.transform = 'translateX(100%)'; // Move it back to the right
        }, 1000); // Matches the CSS transition duration
    }

    // Start the carousel interval
    setInterval(changeSlide, 3000);
});
