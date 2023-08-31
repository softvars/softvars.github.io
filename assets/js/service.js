document.addEventListener("DOMContentLoaded", function () {
    const subHeadings = document.querySelectorAll(".sub-heading");
  
    subHeadings.forEach((heading) => {
      heading.addEventListener("click", () => {
        console.log("Clicked");
        const services = heading.nextElementSibling;
        var isOpen=services.classList.contains('show');

        const servicesList = document.querySelectorAll(".services-list .services");
        servicesList.forEach((services) =>{
          services.classList.remove("show");
        })

        // servicesList.classList.remove("show");
        services.classList.toggle("show", !isOpen) ;
      });
    });
  });
  
  