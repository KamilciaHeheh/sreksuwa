const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

const hashedPassword = '$2b$10$Pcjss2WwK1YW6TZx2hn3Y.gH5zp3kSM1LU6BO4.XE/ssN1OSGR1Tq'; // bcrypt hash dla 'paramx442'

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/verify-password', (req, res) => {
    const { password } = req.body;

    bcrypt.compare(password, hashedPassword, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Błąd serwera' });
        }
        if (result) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(401).json({ success: false, message: 'Niepoprawne hasło' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
