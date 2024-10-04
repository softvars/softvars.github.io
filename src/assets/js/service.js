var onpageload = function () {
  const subHeadings = document.querySelectorAll(".sub-heading");

  subHeadings.forEach((heading) => {
    // Handle both click and touch events explicitly
    const handleAccordionToggle = (e) => {
      //e.preventDefault(); // Prevent default behavior (especially for touch)
      //e.stopPropagation(); // Stop event propagation to avoid conflicts

      const services = heading.nextElementSibling;
      let isOpen = services.classList.contains("show");

      // Close all other accordions
      const servicesList = document.querySelectorAll(".services-list .services");
      servicesList.forEach((service) => {
        service.classList.remove("show");
      });

      // Toggle the current accordion
      services.classList.toggle("show", !isOpen);
    };

    // Add event listeners for click and touchstart
    heading.addEventListener("mouseenter", handleAccordionToggle);
    heading.addEventListener("click", handleAccordionToggle);
    heading.addEventListener("touchstart", handleAccordionToggle, { passive: false }); // Handle touchstart with passive false to allow preventDefault()

    // Close all accordions when the mouse leaves the services list (for desktop only)
    document.querySelector(".services-list").addEventListener("mouseleave", () => {
      const servicesList = document.querySelectorAll(".services-list .services");
      servicesList.forEach((service) => {
        service.classList.remove("show");
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", onpageload);
