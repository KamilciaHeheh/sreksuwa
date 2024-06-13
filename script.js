const correctPassword = 'paramx442';

function verifyPassword() {
    const password = document.getElementById('password').value;

    if (password === correctPassword) {
        document.getElementById('content').classList.add('active');
        document.querySelector('.login-container').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
