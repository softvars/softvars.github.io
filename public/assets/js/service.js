var onpageload = function () {
  const subHeadings = document.querySelectorAll(".sub-heading span");
 
  subHeadings.forEach((heading) => {
    ['mouseover', 'click','ontouchstart'].forEach( function(evt) {
    heading.addEventListener(evt, () => {
      console.log("Clicked");
      const services = heading.parentElement.nextElementSibling;
      var isOpen=services.classList.contains('show');

      const servicesList = document.querySelectorAll(".services-list .services");
      servicesList.forEach((services) =>{
        services.classList.remove("show");
      })

      // servicesList.classList.remove("show");
      services.classList.toggle("show", !isOpen) ;
    });
  });

  heading.addEventListener("mouseleave", () => {
    console.log("Clicked");
    const services = heading.parentElement.nextElementSibling;

    const servicesList = document.querySelectorAll(".services-list .services");
    servicesList.forEach((services) =>{
      services.classList.remove("show");
    })
  });
  });
};

document.addEventListener("DOMContentLoaded", onpageload);
  
  