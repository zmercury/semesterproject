document.addEventListener("DOMContentLoaded", function() {
    // Fetch the contact data from a JSON file
    fetch("../data/contact.json")
      .then(response => response.json())
      .then(data => {
        const contactDetails = document.getElementById("contact-details");
        const { schoolName, address, principalName, phoneNumber, email } = data;
  
        // Create and append the contact information
        const contactInfo = document.createElement("ul");
        contactInfo.innerHTML = `
          <li><strong>School Name:</strong> ${schoolName}</li>
          <li><strong>Address:</strong> ${address}</li>
          <li><strong>Principal Name:</strong> ${principalName}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
          <li><strong>Email:</strong> ${email}</li>
        `;
        contactDetails.appendChild(contactInfo);
      });
  
    // Handle form submission
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.createElement("p");
    successMessage.id = "success-message";
    successMessage.style.display = "none";
    contactForm.appendChild(successMessage);
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Perform form validation and submission logic here

    contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform form validation and submission logic here

    // Display success message
    successMessage.textContent = "Thank you for your message! We will get back to you soon.";
    successMessage.style.display = "block";
      });
    });
  });
  