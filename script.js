document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;  // Capture the email input
    const feedback = document.getElementById('feedback').value;

    // Simple validation check
    if (!name || !email || !feedback) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate the email format using simple regex
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission
    console.log('Submitting your data:', { name, email, feedback });
    alert('Thank you for your feedback!');

    // Clear the form
    this.reset();
});
