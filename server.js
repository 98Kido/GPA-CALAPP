const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = {}; // Simple in-memory user store

// Setup Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'eecdittechnology@gmail.com', //  Please replace with your email
        pass: '659401@Sense'    // Note you need to replace with your email password
    }
});

app.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (users[email]) {
        return res.json({ success: false, message: 'Email already registered.' });
    }

    users[email] = { firstName, lastName, email, password };

    const mailOptions = {
        from: 'eecdittechnology@gmail.com', // Replace this with your email
        to: email,
        subject: 'Registration Confirmation',
        text: `Hello ${firstName} ${lastName},\n\nYou have successfully registered to GPA CALC APP.\n\nBest regards,\nGPA Calculator Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({ success: false, message: 'Failed to send confirmation email.' });
        }
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
