document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Simulate login process
        document.getElementById('login-message').textContent = 'Login successful!';
        // Redirect to GPA Calculator page (for demonstration purposes)
        window.location.href = 'gpa_calculator.html';
    } else {
        document.getElementById('login-message').textContent = 'Please enter both email and password.';
    }
});
