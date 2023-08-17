document.addEventListener("DOMContentLoaded", function () {
    const subHeadings = document.querySelectorAll(".sub-heading");
  
    subHeadings.forEach((heading) => {
      heading.addEventListener("click", () => {
        const services = heading.nextElementSibling;
        services.classList.toggle("show");
      });
    });
  });
  
  