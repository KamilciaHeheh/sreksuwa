document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product').dataset.product;
            sendToDiscord(product);
        });
    });

    function sendToDiscord(product) {
        fetch('https://discord.com/api/webhooks/1250920957649092608/b2Y2GprJPfTx7Iah2z8ttuubB7KS-1o-pc2RGQq6OVxkK48bdRhMU1TPIQuK2DEhYlLT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: `Klient wybrał: ${product}`
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Powiadomienie wysłane!');
            } else {
                alert('Błąd przy wysyłaniu powiadomienia.');
            }
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
    }
});
