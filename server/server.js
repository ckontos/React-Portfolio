const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../public');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const sgMail = require('@sendgrid/mail');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.post('/contact', (req, res) => {
    console.log(req.body);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msgContent = (`<h1>From: ${req.body.name}</h1><h3>Email: ${req.body.email}</h1><p>${req.body.message}</p>`)
    
    const msg = {
        to: 'ckontos3@gmail.com',
        from: 'ckontoswebpage@gmail.com',
        subject: 'New Message From Portfolio',
        text: 'test',
        html: msgContent,
    };
    sgMail.send(msg)
    .then((response) => {
        console.log("email send successful");
        res.json(response);
    })
})


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is running');
});
