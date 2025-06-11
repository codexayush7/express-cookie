const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'ayush', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Username cookie value is: ${username}`);
});

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been cleared!');
});


app.listen(9000, () => {
    console.log('listening to port 9000...');
})