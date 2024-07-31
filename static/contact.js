document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch("http://127.0.0.1:5000/submit-contact", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Display success message to the user
            if (data.message === 'Contact form submitted successfully!') {
                window.location.href = 'index.html'; // Redirect to the dashboard
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit contact form."); // Display error message to the user
        });
    });
});
