const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/add-to-cart', (req, res) => {
    const { product } = req.body;
    console.log(`${product} został dodany do koszyka`);
    res.send(`${product} został dodany do koszyka`);
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
