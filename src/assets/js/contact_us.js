// Define the URL of your REST API
const apiUrl = 'http://localhost:3000/contact_us';

// Create a request object with the necessary options
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:"{}"
};

function addNewEnquery (data) {
// Create an object with the data you want to send
// const data = {
//   name: 'paviiiii',
//   email: 'pavi@email.com',
//   message: 'iiii123abcd'
// };
requestOptions.body =  JSON.stringify(data)

// Use the fetch API to make the POST request
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data here
    console.log('Response data:', data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
}

// Get a reference to the form element
const contactForm = document.getElementById('contact-form');

// Add an event listener to listen for form submission
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get values from the form elements
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Now you can use these values as needed
  console.log('Full Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  const data ={
    name,email,message
  }
  console.log('Full data:', JSON.stringify(data));

  // You can send these values to your API using fetch or perform any other actions.
  addNewEnquery(data);

});
