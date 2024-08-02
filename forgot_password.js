document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('forgot-email').value;

    if (email) {
        // Simulate password reset process
        document.getElementById('forgot-password-message').textContent = 'Password reset link has been sent to your email.';
    } else {
        document.getElementById('forgot-password-message').textContent = 'Please enter your email address.';
    }
});
