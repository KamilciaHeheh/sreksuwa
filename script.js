document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product').dataset.product;
            sendToServer(product);
        });
    });

    function sendToServer(product) {
        fetch('/send-to-discord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
    }
});
