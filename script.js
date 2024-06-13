function verifyPassword() {
    const password = document.getElementById('password').value;

    fetch('/verify-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('content').classList.add('active');
            document.querySelector('.login-container').style.display = 'none';
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Błąd:', error);
    });
}
