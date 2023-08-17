document.addEventListener("DOMContentLoaded", function () {
    const subHeadings = document.querySelectorAll(".sub-heading");
  
    subHeadings.forEach((heading) => {
      heading.addEventListener("click", () => {
        console.log("Clicked")
        
        //const servicesList = document.querySelectorAll(".services-list .services");
        //servicesList.classList.toggle("show");
        const services = heading.nextElementSibling;
        services.classList.toggle("show");
      });
    });
  });
  
  