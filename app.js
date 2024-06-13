const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/send-to-discord', (req, res) => {
    const { product } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const timestamp = new Date().toISOString();
    const orderId = `#${Math.floor(Math.random() * 9000000) + 1000000}`;

    const webhookUrl = 'https://discord.com/api/webhooks/1250920957649092608/b2Y2GprJPfTx7Iah2z8ttuubB7KS-1o-pc2RGQq6OVxkK48bdRhMU1TPIQuK2DEhYlLT';

    const payload = {
        content: `Data i godzina: ${timestamp}\nNumer IP: ${ip}\nKod zamówienia: ${orderId}\nKlient wybrał: ${product}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        res.status(200).json({ message: 'Powiadomienie wysłane!' });
    })
    .catch(error => {
        console.error('Błąd:', error);
        res.status(500).json({ message: 'Błąd przy wysyłaniu powiadomienia.' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
