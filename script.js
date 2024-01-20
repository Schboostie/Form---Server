// script.js

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data using FormData
    const formData = new FormData(event.target);

    try {
      // Send a POST request to the Netlify serverless function
      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        // Convert FormData to a plain object and stringify it
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Log a success message to the console
        console.log("Form submitted successfully");

        // Optionally, you can redirect the user to a thank you page or show a success message.
        // For example, uncomment the following lines to redirect to a thank you page:
        // window.location.href = '/thank-you.html';
      } else {
        // Log an error message to the console
        console.error("Error submitting form:", response.statusText);

        // Handle the error (e.g., display an error message to the user)
        // You can update the UI to inform the user that there was an issue with the submission
      }
    } catch (error) {
      // Log an error message to the console
      console.error("Error submitting form:", error);

      // Handle the error (e.g., display an error message to the user)
      // You can update the UI to inform the user that there was an issue with the submission
    }
  });
