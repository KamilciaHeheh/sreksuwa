function selectProduct(product) {
    const timestamp = new Date().toISOString();
    const orderId = `#${Math.floor(Math.random() * 9000000) + 1000000}`;
    
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            sendToDiscord(product, timestamp, orderId, ip);
        });
}

function sendToDiscord(product, timestamp, orderId, ip) {
    fetch('/send-to-discord', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product,
            timestamp,
            orderId,
            ip
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Błąd:', error);
    });
}
