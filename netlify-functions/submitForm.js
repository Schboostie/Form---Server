// netlify-functions/submitForm.js

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Process the form data
    console.log("Received form data:", formData);

    // Implement your logic to handle the form data (e.g., send an email, store in a database)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Error processing form submission:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
