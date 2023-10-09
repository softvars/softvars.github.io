// Define the URL of your REST API
const apiUrl = "api/contact_form.php";

// Create a request object with the necessary options
const requestOptions = {
  method: "POST",
  body: "{}",
};

function addNewEnquery(data) {
  //requestOptions.body =  JSON.stringify(data)
  requestOptions.body = data;

  // Use the fetch API to make the POST request
  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log("Response data:", data);
      document.getElementById("contact-form").reset();
      document.getElementById("contactUSSubmit").disabled = false;
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}

// Get a reference to the form element
const contactForm = document.getElementById("contact-form");

// Add an event listener to listen for form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  document.getElementById("contactUSSubmit").disabled = true;

  // // Get values from the form elements
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // // Now you can use these values as needed
  console.log("Full Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  var formData = new FormData();
  formData.append("name", name); // Replace with the actual name value
  formData.append("email", email); // Replace with the actual email value
  formData.append("message", message); // Replace with the actual message value

  // You can send these values to your API using fetch or perform any other actions.
  addNewEnquery(formData);
});
