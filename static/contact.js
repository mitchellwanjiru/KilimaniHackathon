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
            if (data.message === 'Contact form submitted successfully!') {
                // Store submission data in local storage
                localStorage.setItem('contactSubmission', JSON.stringify({
                    id: data.id,
                    timestamp: data.timestamp
                }));
                
                // Redirect to index.html
                window.location.href = 'index.html';
            } else {
                alert(data.message); // Display error message
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit contact form."); // Display error message
        });
    });
});
