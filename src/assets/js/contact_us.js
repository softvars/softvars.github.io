// Define the URL of your REST API
const apiUrl = "api/contact_form.php";

// Create a request object with the necessary options
const requestOptions = {
  method: "POST",
  body: "{}",
};

// Limit tracking: Store the last submission time
let lastSubmissionTime = 0;

// Set a limit: 1 submission per 60 seconds, max 10 submissions per day
const SUBMISSION_INTERVAL = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_DAY = 10;
let submissionCount = 0;

// Simple rate-limiting using localStorage for per-minute and per-day limits
function isRateLimited() {
  const currentTime = Date.now();
  const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
  const dailySubmissionCount = parseInt(localStorage.getItem('dailySubmissionCount')) || 0;
  const lastSubmissionDay = localStorage.getItem('lastSubmissionDay');
  const currentDay = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
  
  // Check if it's a new day, reset daily submission count
  if (currentDay !== lastSubmissionDay) {
    localStorage.setItem('dailySubmissionCount', '0');
    submissionCount = 0;
  }

  // Block submission if too frequent or over the daily limit
  if (dailySubmissionCount >= MAX_SUBMISSIONS_PER_DAY) {
    alert("Submission limit reached for today.");
    return true;
  }

  if (lastSubmissionTime && currentTime - lastSubmissionTime < SUBMISSION_INTERVAL) {
    alert("Please wait before submitting again.");
    return true;
  }

  return false;
}

function addNewEnquiry(data) {
  // Handle form submission delay and disable button
  if (isRateLimited()) {
    document.getElementById("contactUSSubmit").disabled = false;
    return;
  }

  requestOptions.body = data;

  // Use the fetch API to make the POST request
  fetch(apiUrl, requestOptions)
    .then((response) => {
      document.getElementById("contactUSSubmit").disabled = false;
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response data:", data);
      document.getElementById("contact-form").reset();
      
      // Update submission tracking in localStorage
      const currentTime = Date.now();
      localStorage.setItem('lastSubmissionTime', currentTime.toString());
      
      // Track the current day and submission count
      const currentDay = new Date().toISOString().split('T')[0];
      localStorage.setItem('lastSubmissionDay', currentDay);
      const updatedCount = (parseInt(localStorage.getItem('dailySubmissionCount')) || 0) + 1;
      localStorage.setItem('dailySubmissionCount', updatedCount.toString());
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Get a reference to the form element
const contactForm = document.getElementById("contact-form");

// Add an event listener to listen for form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  document.getElementById("contactUSSubmit").disabled = true;

  // Get values from the form elements
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Add form validation if needed here (e.g. email format validation)

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Send the form data
  addNewEnquiry(formData);
});
