const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(c0rs());

app.use(express.urlencoded({extended: false}));

app.post('/upload', function(req, res)
{
    const params = new URLSearchParams({
        secret: '6Ldj-OgrAAAAALOiT78jQoDduTWguiDd4AYgdstN',
        response: req.body['g-recaptcha-response'],
        remoteip: req.ip, 

    })

    fetch('https://www.google.com/recaptcha/api/siteverify',
        {
            method: "POST",
            body: params,
        }
    )

    .then(res => res.json())
    .then(data => {

        if(data.success)
        {
            res.json({captchaSuccess: true});
        }

        else
        {
            res.json({captchaSuccess: false});
        }
    })
});

app.listen(port, () =>
{
    console.log(`App is runnning on port ${port}`);
});