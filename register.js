document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('register-message').textContent = 'Passwords do not match.';
        return;
    }

    if (firstName && lastName && email && password) {
        // Simulate registration process
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('register-message').textContent = 'Registration successful! Please check your email.';
            } else {
                document.getElementById('register-message').textContent = data.message;
            }
        });
    } else {
        document.getElementById('register-message').textContent = 'Please fill in all fields.';
    }
});
